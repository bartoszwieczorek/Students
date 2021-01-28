from __future__ import unicode_literals

from djongo import models


class Student(models.Model):
    # created_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    #
    # updated_at = models.DateTimeField(auto_now_add=False, auto_now=True)
    id = models.IntegerField(primary_key=True, unique=True)
    name = models.CharField(max_length=20, null=True)
    age = models.IntegerField(default=10, null=True)
    roll_number = models.CharField(max_length=20, null=True)

    def __str__(self):
        return self.name
