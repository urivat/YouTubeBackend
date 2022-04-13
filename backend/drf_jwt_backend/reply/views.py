from django.shortcuts import render
from xml.etree.ElementTree import reply
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from backend.drf_jwt_backend.reply import serializer
from .models import reply
from .serializer import ReplySerializer
from comment.models import Comment
from django.contrib.auth.models import User

# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_relpies(request):
    reply = reply.objects.filter()
    serializer = ReplySerializer(reply, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_reply(request):
    serializer = ReplySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



        