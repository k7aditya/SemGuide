from django.urls import path
from .views import FeedbackCreateAPIView
from myapp.views import CreateUserView, GetSubjectIDByName, LoginAPIView,APILogoutView,GetUserFromToken,UserUpdateAPIView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.urls import path
from myapp.views import SemesterListCreate, SemesterRetrieveUpdateDestroy, SubjectListCreate, SubjectRetrieveUpdateDestroy, DocumentListCreate, DocumentRetrieveUpdateDestroy, LinkListCreate, LinkRetrieveUpdateDestroy

urlpatterns = [
    path('feedback/',FeedbackCreateAPIView.as_view(), name='feedback'),
     path("register/", CreateUserView.as_view(), name='register'),
    path("token/", TokenObtainPairView.as_view(), name='get_token'),
    path("token/refresh/", TokenRefreshView.as_view(), name='refresh'),
    path("auth/", include("rest_framework.urls")),
    path('logout/', APILogoutView.as_view(), name='logout_token'), 
    path('user/login/', LoginAPIView.as_view(), name='login'),
    path('userdetails/',GetUserFromToken.as_view(),name='userdetails'),
    path('id',UserUpdateAPIView.as_view(),name='id'),
    path('get-subject-id/', GetSubjectIDByName.as_view(), name='get_subject_id'),
    path('semesters/', SemesterListCreate.as_view(), name='semester-list-create'),
    path('semesters/<int:pk>/', SemesterRetrieveUpdateDestroy.as_view(), name='semester-retrieve-update-destroy'),
    path('subjects/', SubjectListCreate.as_view(), name='subject-list-create'),
    path('subjects/<int:pk>/', SubjectRetrieveUpdateDestroy.as_view(), name='subject-retrieve-update-destroy'),
    path('subjects/<int:subject_id>/documents/', DocumentListCreate.as_view(), name='document-list-create'),
    path('subjects/<int:subject_id>/documents/<int:pk>/', DocumentRetrieveUpdateDestroy.as_view(), name='document-retrieve-update-destroy'),
    path('<int:subject_id>/links/', LinkListCreate.as_view(), name='link-list-create'),
    path('links/<int:pk>/', LinkRetrieveUpdateDestroy.as_view(), name='link-retrieve-update-destroy'),
    path('documents/<int:subject_id>/', DocumentListCreate.as_view(), name='document-list-create'),

]
