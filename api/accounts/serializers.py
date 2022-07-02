import requests
from rest_framework.response import Response
from rest_framework.serializers import ModelSerializer

from accounts.exceptions import InvalidZipCodeError
from accounts.models import AccountModel


class AccountSerializer(ModelSerializer):
    class Meta:
        model = AccountModel
        fields = [
            "id",
            "first_name",
            "last_name",
            "username",
            "email",
            "password",
            "zip_code",
            "street",
            "city",
            "state",
            "created_at",
            "updated_at",
        ]
        extra_kwargs = {"password": {"write_only": True}}

    def validate_zip_code(self, value):
        """
        Validates if zip code is valid
        """
        url = f"https://viacep.com.br/ws/{value}/json/"
        error_msg = {"erro": "true"}
        response = requests.get(url)

        if response.json() == error_msg:
            raise InvalidZipCodeError

        return value

    def create(self, validated_data):
        return AccountModel.objects.create_user(**validated_data)
