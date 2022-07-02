from rest_framework.generics import CreateAPIView

from accounts.models import AccountModel
from accounts.serializers import AccountSerializer


class CreateAccountView(CreateAPIView):
    serializer_class = AccountSerializer
    queryset = AccountModel.objects
