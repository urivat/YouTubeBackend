from django.urls import path, include
from reply import views

urlpatterns= [
    path('all', views.get_all_relpies),
    path('<int:id>/replies/',  views.user_reply),
    
]