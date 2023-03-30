from rest_framework import serializers
from .models import EmployeeModel


class EmployeeSerilizer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = EmployeeModel
        fields = '__all__'