from django.urls import path
from . import views

urlpatterns = [

    path('product/',views.ProductListCreateView.as_view(),name='list-create-view')
]
