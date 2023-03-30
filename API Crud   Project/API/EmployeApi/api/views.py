from django.shortcuts import render
from rest_framework import viewsets
from .models import EmployeeModel
from .serializers import EmployeeSerilizer
# Create your views here.


# ViewSet
class api_view(viewsets.ModelViewSet):
    queryset = EmployeeModel.objects.all()
    serializer_class = EmployeeSerilizer