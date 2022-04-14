from django.urls import path, include
from comment import views

urlpatterns= [
    path('all/', views.get_all_comments),
    path('', views.user_comments),
    path('<int:pk>/update/', views.get_comment_details),
    path('', include('reply.urls'))
]