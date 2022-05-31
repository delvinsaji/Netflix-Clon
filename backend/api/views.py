from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.response import Response
from django.http import HttpResponse
from .serializers import ProfileSerializer,WatchlistSerializer,HistorySerializer,UserSerializer
from project.models import Profile,Watchlist,History
from django.http import HttpResponse
from django.contrib.auth.models import User

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getprofile(request,pk):
  profile = Profile.objects.get(user = User.objects.get(username = pk))
  serializer = ProfileSerializer(profile,many = False)
  return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getwatchlist(request,pk):
  watchlist = Watchlist.objects.filter(owner = Profile.objects.get(id = pk))
  serializer = WatchlistSerializer(watchlist,many = True)
  return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def gethistory(request,pk):
  history = History.objects.filter(owner = Profile.objects.get(id = pk))
  serializer = HistorySerializer(history,many = True)
  return Response(serializer.data)

@api_view(['POST'])
def postwatchlist(request,pk):
  data = request.data
  movie_name = data['movie_name']
  movie_id = data['movie_id']
  watchlist = Watchlist.objects.get(movie_name = movie_name)
  if watchlist is not None:
    return HttpResponse("The movie is already in your watchlist")
  else:
    watchlist = Watchlist.objects.create(owner = Profile.objects.get(id = pk),movie_name = movie_name,movie_id = movie_id)
  return HttpResponse('The API is successfully received')

@api_view(['POST'])
def createuser(request):
  data = request.data
  serializer = UserSerializer(data = data)
  if serializer.is_valid():
    serializer.save()
  profile = Profile.objects.create(user = User.objects.get(username = data['username']),
                                    name = data['name'],email = data['email'])
  return HttpResponse("User Created")


