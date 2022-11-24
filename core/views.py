from django.shortcuts import render,redirect
from django.urls import reverse_lazy
from django.views import generic as views

class HomeView(views.TemplateView):
    template_name = "core/home.html"
    extra_context = {"page_name":"Home"}
