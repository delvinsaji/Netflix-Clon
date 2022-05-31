from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.http import HttpResponse
# Create your views here.

def xx(request):
  user = UserCreationForm
  context = {'form':user}

  if request.method == 'POST':
    print(request.POST)
  return render(request,'project/index.html',context)