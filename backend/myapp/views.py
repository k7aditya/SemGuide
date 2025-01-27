from rest_framework.generics import CreateAPIView,GenericAPIView,ListAPIView
from rest_framework.response import Response
from rest_framework import status,generics
from .models import User,Feedback,LoginSession,BlacklistedToken
from .serializers import UserSerializer,LoginSerializer,FeedbackSerializer, UserUpdateSerializer,UserprofileSerializer
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.decorators import permission_classes,api_view
from rest_framework.views import APIView
from rest_framework.mixins import CreateModelMixin
from django.http import JsonResponse
from django.views.decorators.http import require_POST
import json
from rest_framework_simplejwt.tokens import AccessToken,RefreshToken
from rest_framework_simplejwt.token_blacklist.models import OutstandingToken, BlacklistedToken
import jwt
from django.conf import settings
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist  
from rest_framework_simplejwt.tokens import OutstandingToken
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import check_password
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics, status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from .models import Semester, Subject, Document, Link
from .serializers import SubjectSerializer, DocumentSerializer, LinkSerializer
from rest_framework import generics
from .models import Semester, Subject, Document, Link
from .serializers import SemesterSerializer, SubjectSerializer, DocumentSerializer, LinkSerializer
from rest_framework import generics
from .models import Subject, Document, Link
from .serializers import SubjectSerializer, DocumentSerializer, LinkSerializer
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import Subject
from .serializers import SubjectSerializer, SubjectNameSerializer

class GetSubjectIDByName(generics.CreateAPIView):
    serializer_class = SubjectNameSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        subject_name = serializer.validated_data.get('name')
        
        try:
            subject = Subject.objects.get(name=subject_name)
            return Response({'id': subject.id}, status=status.HTTP_200_OK)
        except Subject.DoesNotExist:
            return Response({'error': 'Subject not found'}, status=status.HTTP_404_NOT_FOUND)

class SemesterListCreate(generics.ListCreateAPIView):
    queryset = Semester.objects.all()
    serializer_class = SemesterSerializer

class SemesterRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Semester.objects.all()
    serializer_class = SemesterSerializer
class SubjectRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = SubjectSerializer

    def get_queryset(self):
        subject_id = self.kwargs['subject_id']
        return Subject.objects.filter(subject_id=subject_id)

class DocumentRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = DocumentSerializer

    def get_queryset(self):
        subject_id = self.kwargs['subject_id']
        return Document.objects.filter(subject_id=subject_id)

class LinkRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = LinkSerializer

    def get_queryset(self):
        subject_id = self.kwargs['subject_id']
        return Link.objects.filter(subject_id=subject_id)

class SubjectListCreate(generics.ListCreateAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

class DocumentListCreate(generics.ListCreateAPIView):
    serializer_class = DocumentSerializer

    def get_queryset(self):
        subject_id = self.kwargs['subject_id']
        document_type = self.request.query_params.get('document_type')  
        queryset = Document.objects.filter(subject_id=subject_id)

        if document_type:
            queryset = queryset.filter(document_type=document_type)

        return queryset


class LinkListCreate(generics.ListCreateAPIView):
    serializer_class = LinkSerializer

    def get_queryset(self):
        subject_id = self.kwargs['subject_id']
        return Link.objects.filter(subject_id=subject_id)

class FeedbackCreateAPIView(CreateAPIView):
    serializer_class = FeedbackSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class LoginAPIView(APIView):
    permission_classes = [AllowAny]
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        refresh = RefreshToken.for_user(user)
        access = AccessToken.for_user(user)
        is_admin = user.is_superuser  
        return Response({
            'user_id': user.id,
            'access': str(access),
            'refresh': str(refresh),
            'is_admin': is_admin  
        }, status=status.HTTP_200_OK)

class APILogoutView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        if self.request.data.get('all'):
            tokens = OutstandingToken.objects.filter(user=request.user)
            for token in tokens:
                _, _ = BlacklistedToken.objects.get_or_create(token=token)
            return Response({"status": "OK, goodbye, all refresh tokens blacklisted"})
        else:
            refresh_token = self.request.data.get('refresh_token')
            token = RefreshToken(token=refresh_token)
            token.blacklist()
            return Response({"status": "OK, goodbye"})

class GetUserFromToken(APIView):
    def post(self, request):
        token = request.data.get('token')
        if token:
            user = self.get_user_from_token(token)
            if user:
                serialized_user = UserprofileSerializer(user)
                return Response(serialized_user.data)
            else:
                return Response({'error': 'Invalid or expired token'}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({'error': 'Token not provided'}, status=status.HTTP_400_BAD_REQUEST)
    def get_user_from_token(self, token):
        try:
            decoded_token = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            user_id = decoded_token['user_id']
            user = User.objects.get(pk=user_id)
            return user
        except jwt.ExpiredSignatureError:
            return None
        except (jwt.InvalidTokenError, ObjectDoesNotExist):
            return None
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def my_api_view(request):
    user_id = request.user.id
    return Response({'user_id': user_id})

class UserUpdateAPIView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserUpdateSerializer

    def put(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = request.user
        current_password = serializer.validated_data['current_password']
        new_password = serializer.validated_data.get('new_password', None)
        confirm_new_password = serializer.validated_data.get('confirm_new_password', None)

        if not check_password(current_password, user.password):
            return Response({'current_password': ['Incorrect password.']}, status=400)

        if new_password != confirm_new_password:
            return Response({'confirm_new_password': ['New passwords do not match.']}, status=400)

        if new_password:
            user.set_password(new_password)
            user.save()
        return Response({'detail': 'User profile updated successfully.'}, status=200)


