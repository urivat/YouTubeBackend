from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializer import Comment, CommentSerializer
from django.http import Http404
from django.shortcuts import get_list_or_404, get_object_or_404
# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request, video_id):
        get_comment = Comment.objects.all()
        serializer = CommentSerializer(get_comment, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_comments(request):
    print(
        'User', f'{request.user.id} {request.user.email} {request.user.username} ')
    if request.method == 'POST':
        serializer= CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        comments = Comment.objects.filter(user_id=request.user.id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)
@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def get_comment_details(request, pk):
    comment = get_object_or_404(Comment, pk=pk)
    if request.method == 'PUT':
        serializer= CommentSerializer(comment, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'GET':
        serializer = CommentSerializer(comment)
        return Response(serializer.data)
    # elif request.method == 'POST':
    #     serializer = CommentSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response (serializer.data, status=status.HTTP_201_CREATED)






