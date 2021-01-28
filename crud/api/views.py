from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import StudentSerializer, StudentMiniSerializer
from .models import Student
from rest_framework.response import Response


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def list(self, request, *args, **kwargs):
        students = Student.objects.all()
        serializer = StudentMiniSerializer(students, many=True)
        return Response(serializer.data)
