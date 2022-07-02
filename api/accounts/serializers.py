from rest_framework.serializers import ModelSerializer

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

    def create(self, validated_data):
        return AccountModel.objects.create_user(**validated_data)
