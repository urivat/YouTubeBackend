from django.urls import path, include
from comment import views

urlpatterns= [
    path('', views.get_all_comments)
]