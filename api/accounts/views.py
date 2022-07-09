from rest_framework.generics import CreateAPIView

from accounts.exceptions import (
    AlreadyRegisteredEmailError,
    AlreadyRegisteredUsernameError,
)
from accounts.models import AccountModel
from accounts.serializers import AccountSerializer


class CreateAccountView(CreateAPIView):
    serializer_class = AccountSerializer
    queryset = AccountModel.objects

    def create(self, request, *args, **kwargs):
        email = (
            self.get_queryset().filter(email__iexact=request.data["email"]).exists()
            if request.data.get("email")
            else None
        )

        if email:
            raise AlreadyRegisteredEmailError()

        username = (
            self.get_queryset()
            .filter(username__iexact=request.data["username"])
            .exists()
            if request.data.get("username")
            else None
        )

        if username:
            raise AlreadyRegisteredUsernameError()
        return super().create(request, *args, **kwargs)
