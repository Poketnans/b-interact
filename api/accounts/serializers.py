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
            "zip_code",
            "street",
            "city",
            "state",
            "created_at",
            "updated_at",
        ]

    def create(self, validated_data):
        return AccountModel.objects.create_user(**validated_data)
