from rest_framework import serializers
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model= Comment
        field = ['user', 'video_id', 'text', 'like', 'dislike']
        depth = 1