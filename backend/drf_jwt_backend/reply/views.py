from django.shortcuts import render
from xml.etree.ElementTree import Reply
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializer import Reply, ReplySerializer
from comment.models import Comment

# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def get_reply(request):
    reply = Reply.objects.filter()
    serializer = ReplySerializer(reply, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def 