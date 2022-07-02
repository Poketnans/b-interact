from django.urls import path

from accounts.views import CreateAccountView

urlpatterns = [
    path("accounts/", CreateAccountView.as_view()),
]
