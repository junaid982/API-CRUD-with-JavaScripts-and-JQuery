from django.db import models

# Create your models here.

position_choices = [('developer','developer'),('tester','tester'),('manager','manager')]

class EmployeeModel(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    contact = models.CharField(max_length=12)
    address = models.TextField()
    position = models.CharField(max_length=100 , choices= position_choices)
    company = models.CharField(max_length=100)