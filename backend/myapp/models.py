import os
from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db.models.signals import post_save
from django.conf import settings

class Semester(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Subject(models.Model):
    name = models.CharField(max_length=100)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Document(models.Model):
    DOCUMENT_TYPE_CHOICES = (
        ('PYQ', 'PYQ'),
        ('Notes', 'Notes'),
    )
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    document_type = models.CharField(max_length=50, choices=DOCUMENT_TYPE_CHOICES)  
    document_file = models.FileField(upload_to='documents/')
    def delete(self, *args, **kwargs):
        if self.document_file:
            self.document_file.delete(save=False)
        super().delete(*args, **kwargs)
    def __str__(self):
        return f"{self.get_document_type_display()} - {self.subject.name}"


class Link(models.Model):
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    link_url = models.URLField()

    def __str__(self):
        return f"Link for {self.subject.name}"


class Feedback(models.Model):
    overall_experience = models.IntegerField(('Overall Experience'))
    easy_to_find_info = models.CharField(('Easy to Find Info'), max_length=255, blank=True)
    navigation = models.CharField(('Navigation'), max_length=255, blank=True)
    issues = models.CharField(('Issues'), max_length=255, blank=True)
    liked_most = models.CharField(('Liked Most'), max_length=255, blank=True)
    improvements = models.CharField(('Improvements'), max_length=255, blank=True)
    likelihood_to_recommend = models.IntegerField(('Likelihood to Recommend'), blank=True, null=True)
    additional_feedback = models.TextField(('Additional Feedback'), blank=True)
    created_at = models.DateTimeField(('Created At'), auto_now_add=True)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f"Feedback (ID: {self.pk})"

    class Meta:
        verbose_name = ('Feedback')
        verbose_name_plural = ('Feedbacks')

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)

class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

class LoginSession(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    login_time = models.DateTimeField(auto_now_add=True)
    logout_time = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"Login session for {self.user.username}"

class BlacklistedToken(models.Model):
    token = models.CharField(max_length=255)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    def __str__(self):
        return self.token

