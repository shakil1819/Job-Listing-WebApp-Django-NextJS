from django.urls import path
from .views import JobListCreate, JobDetail

urlpatterns = [
    path('jobs/', JobListCreate.as_view(), name='job-list-create'),
    path('jobs/<int:pk>/', JobDetail.as_view(), name='job-detail'),
]
