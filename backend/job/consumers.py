import json
from channels.generic.websocket import AsyncWebsocketConsumer

class JobConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add("job_updates", self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard("job_updates", self.channel_name)

    async def receive(self, text_data):
        data = json.loads(text_data)
        await self.channel_layer.group_send(
            "job_updates",
            {
                'type': 'job_message',
                'message': data,
            }
        )

    async def job_message(self, event):
        message = event['message']
        await self.send(text_data=json.dumps(message))
