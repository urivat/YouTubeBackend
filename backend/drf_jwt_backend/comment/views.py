from xml.etree.ElementTree import Comment
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializer import Comment, CommentSerializer
# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request):
    get_comment = Comment.objects.all()
    serializer = CommentSerializer(Comment, many = True)
    return (serializer.data)


