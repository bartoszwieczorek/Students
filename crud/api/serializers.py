from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Student


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'name', 'age', 'roll_number')


class StudentMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'name')
