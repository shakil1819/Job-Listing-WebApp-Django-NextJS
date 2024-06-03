# job/signals.py
from django.db.models.signals import post_save
from django.dispatch import receiver
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from .models import Job
from .serializers import JobSerializer

@receiver(post_save, sender=Job)
def notify_job_updates(sender, instance, **kwargs):
    channel_layer = get_channel_layer()
    data = JobSerializer(instance).data
    async_to_sync(channel_layer.group_send)(
        "job_updates",
        {
            "type": "job_message",
            "message": data,
        }
    )
