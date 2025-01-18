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
     path("api/register/", CreateUserView.as_view(), name='register'),
    path("api/token/", TokenObtainPairView.as_view(), name='get_token'),
    path("api/token/refresh/", TokenRefreshView.as_view(), name='refresh'),
    path("api-auth/", include("rest_framework.urls")),
    path('logout/', APILogoutView.as_view(), name='logout_token'), 
    path('api/user/login/', LoginAPIView.as_view(), name='login'),
    path('api/userdetails/',GetUserFromToken.as_view(),name='userdetails'),
    path('api/id',UserUpdateAPIView.as_view(),name='id'),
    path('api/get-subject-id/', GetSubjectIDByName.as_view(), name='get_subject_id'),
    path('api/semesters/', SemesterListCreate.as_view(), name='semester-list-create'),
    path('api/semesters/<int:pk>/', SemesterRetrieveUpdateDestroy.as_view(), name='semester-retrieve-update-destroy'),
    path('api/subjects/', SubjectListCreate.as_view(), name='subject-list-create'),
    path('api/subjects/<int:pk>/', SubjectRetrieveUpdateDestroy.as_view(), name='subject-retrieve-update-destroy'),
    path('api/subjects/<int:subject_id>/documents/', DocumentListCreate.as_view(), name='document-list-create'),
    path('api/subjects/<int:subject_id>/documents/<int:pk>/', DocumentRetrieveUpdateDestroy.as_view(), name='document-retrieve-update-destroy'),
    path('api/<int:subject_id>/links/', LinkListCreate.as_view(), name='link-list-create'),
    path('api/links/<int:pk>/', LinkRetrieveUpdateDestroy.as_view(), name='link-retrieve-update-destroy'),
    path('documents/<int:subject_id>/', DocumentListCreate.as_view(), name='document-list-create'),

]
