from django.db import models
from django.contrib.auth.models import User
import uuid

class Profile(models.Model):
  user = models.OneToOneField(User,on_delete = models.CASCADE,null = True,blank = True)
  id = models.UUIDField(default = uuid.uuid4,editable = False,unique = True,primary_key = True)
  name = models.CharField(max_length = 200,null  = True,blank = True)
  age = models.IntegerField(null = True,blank = True)
  email = models.EmailField(null = True,blank = True)

  def __str__(self):
    return self.name

class Watchlist(models.Model):
  owner = models.ForeignKey('Profile',on_delete = models.CASCADE)
  movie_name = models.CharField(max_length = 200)
  movie_id = models.CharField(max_length = 500,default = '000000')

  def __str__(self):
    return self.movie_name

class History(models.Model):
  owner = models.ForeignKey('Profile',on_delete = models.CASCADE)
  movie_name = models.CharField(max_length = 200)
  movie_id = models.CharField(max_length = 500,default = '000000')

  def __str__(self):
    return self.movie_name

