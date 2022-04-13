from tkinter import CASCADE
from django.db import models
from django.contrib.auth.models import User
from comment.models import Comment


class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=CASCADE)
    comment = models.ForeignKey(Comment, on_delete=CASCADE)
    text = models.CharField(max_length=255)

    class Meta:
        astract = True