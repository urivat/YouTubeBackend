


from tkinter import CASCADE
from django.db import models
from django.contrib.auth.models import User



class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey('comment.Comment', on_delete=models.CASCADE)
    text = models.CharField(max_length=255)

