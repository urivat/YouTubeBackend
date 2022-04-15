from django.urls import path, include
from reply import views

urlpatterns= [
    path('all/', views.get_all_relpies),
    path('',  views.user_reply),
    
]