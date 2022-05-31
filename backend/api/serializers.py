from rest_framework import serializers
from project.models import Profile,Watchlist,History
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
  class Meta:
      model = User
      fields = ('username', 'password','email')

  def create(self, validated_data):
      user = User(
          username=validated_data['username']
      )
      user.set_password(validated_data['password'])
      user.save()
      return user


    
    
class WatchlistSerializer(serializers.ModelSerializer):
  class Meta:
    model = Watchlist
    fields = '__all__'

class HistorySerializer(serializers.ModelSerializer):
  class Meta:
    model = History
    fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model = Profile
    fields = '__all__'



