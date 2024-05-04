from rest_framework import serializers
from .models import Feedback,LoginSession
from rest_framework.exceptions import ValidationError,AuthenticationFailed
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import Semester, Subject, Document, Link
from rest_framework import serializers


class SubjectNameSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)

class SubjectNameToIDSerializer(serializers.Serializer):
    subject_name = serializers.CharField()
    subject_id = serializers.IntegerField()

class SemesterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Semester
        fields = '__all__'

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'

from rest_framework import serializers

from os.path import basename

class DocumentSerializer(serializers.ModelSerializer):
    document_file_name = serializers.SerializerMethodField()

    class Meta:
        model = Document
        fields = ['id', 'subject', 'document_type', 'document_file', 'document_file_name']

    def get_document_file_name(self, obj):
        if obj.document_file:
            return basename(obj.document_file.name)
        return None


class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = '__all__'

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = (
            'overall_experience',
            'easy_to_find_info',
            'navigation',
            'issues',
            'liked_most',
            'improvements',
            'likelihood_to_recommend',
            'additional_feedback',
        )

    def validate(self, data):
        if not any(data.values()):
            raise ValidationError("At least one field must be filled")
        return data

class UserSerializer(serializers.ModelSerializer):
    FIRST_NAME_CHOICES = [
        ('IT', 'IT'),
        ('ITBI', 'ITBI'),
        ('ECE', 'ECE'),
    ]
    first_name = serializers.ChoiceField(choices=FIRST_NAME_CHOICES, write_only=True)
    last_name = serializers.CharField(write_only=True)
    email = serializers.EmailField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["id", "username",  "first_name", "last_name", "email", "password", "confirm_password"]
        extra_kwargs = {
            "password": {"write_only": True},
            "username": {"validators": []},
        }

    def validate(self, data):
        username = data.get('username', None)
        email = data.get('email', None)
        if User.objects.filter(username=username).exists():
            raise serializers.ValidationError("Username already exists")
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError("Email already exists")
        return data

    def create(self, validated_data):
        first_name = validated_data.pop('first_name')
        last_name = validated_data.pop('last_name')
        email = validated_data.pop('email')
        confirm_password = validated_data.pop('confirm_password')
        if validated_data['password'] != confirm_password:
            raise serializers.ValidationError("Passwords do not match")

        user = User.objects.create_user(**validated_data, first_name=first_name, last_name=last_name, email=email)
        return user

class LoginSerializer(serializers.Serializer):
    username_or_email = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        username_or_email = data.get('username_or_email')
        password = data.get('password')
        user = authenticate(request=None, username=username_or_email, password=password)
        if user is None:
            try:
                user = User.objects.get(email=username_or_email)
                user = authenticate(request=None, username=user.username, password=password)
            except User.DoesNotExist:
                pass
        if user is None:
            raise AuthenticationFailed("Invalid username/email or password")
        data['user'] = user
        return data

class UserUpdateSerializer(serializers.Serializer):
    username = serializers.CharField(required=False)
    email = serializers.EmailField(required=False)
    current_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=False)
    confirm_new_password = serializers.CharField(required=False)

class UserprofileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "username","first_name", "last_name",  "is_active", "is_staff", "date_joined"]

