from tkinter import CASCADE
from django.db import models
from django.contrib.auth.models import User
from reply.models import Reply


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    video_id = models.CharField(max_length=255)
    text= models.CharField(max_length=255)
    like = models.IntegerField()
    dislike = models.IntegerField()

    
# Create your models here.
