from django.contrib import admin
from .models import Profile,Watchlist,History
# Register your models here.

admin.site.register([Profile,Watchlist,History])
