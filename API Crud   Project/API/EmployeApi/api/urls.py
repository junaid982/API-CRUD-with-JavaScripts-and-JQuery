from django.urls import path , include
from .import views
from rest_framework import routers

# default routing object
router = routers.DefaultRouter()
router.register(r'emp' , views.api_view)

urlpatterns = [
    path('', include(router.urls))
]