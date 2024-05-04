from django.contrib import admin
from .models import Feedback
if not admin.site.is_registered(Feedback):
    class FeedbackAdmin(admin.ModelAdmin):
        list_display = ['overall_experience', 'easy_to_find_info', 'navigation', 'issues', 'liked_most', 'improvements', 'likelihood_to_recommend', 'additional_feedback', 'created_at', 'user']

    admin.site.register(Feedback, FeedbackAdmin)

