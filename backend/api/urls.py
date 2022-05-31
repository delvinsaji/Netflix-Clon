from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
  path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
  path('profile/<str:pk>',views.getprofile,name = 'profile'),
  path('watchlist/<str:pk>/',views.getwatchlist,name = 'watchlist'),
  path('history/<str:pk>/',views.gethistory,name = 'history'),
  path('postwatchlist/<str:pk>',views.postwatchlist,name = 'postwatchlist'),
  path('createuser/',views.createuser,name = 'createuser')
]