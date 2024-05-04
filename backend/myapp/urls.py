from django.urls import path
from .views import FeedbackCreateAPIView

urlpatterns = [
    path('feedback/',FeedbackCreateAPIView.as_view(), name='feedback'),
]
