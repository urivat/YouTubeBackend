from django.urls import path, include
from backend.drf_jwt_backend.comment.views import user_comments
from comment import views

urlpatterns= [
    path('all', views.get_all_comments),
    path('', views.user_comments),
]