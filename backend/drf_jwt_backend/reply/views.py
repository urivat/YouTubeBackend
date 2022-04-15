from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializer import ReplySerializer
from django.contrib.auth.models import User

# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_relpies(request):
    reply = Reply.objects.all()
    serializer = ReplySerializer(reply, many=True)
    return Response(serializer.data)


@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def user_reply(request, comment_id):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        reply = Reply.objects.filter(user= request.user.id)
        serializer = ReplySerializer(reply, many=True)
        return Response(serializer.data)


        