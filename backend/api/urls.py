from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

# urlpatterns = [
#     path('',home)
# ]
router = DefaultRouter()
router.register('project', ProjectViewset, basename='project') #what does this do?
urlpatterns = router.urls
