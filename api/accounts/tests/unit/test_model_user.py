from accounts.models import AccountModel
from django.db.models import fields
from rest_framework.test import APITestCase


class AccountModelModelTests(APITestCase):
    expected_fieldnames = [
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

    @classmethod
    def setUpTestData(cls) -> None:
        try:
            models = __import__("accounts.models", fromlist=["models"])
            cls.account_model = getattr(models, "AccountModel")
        except ImportError:
            raise AssertionError("Class User not found in project.")

    def test_account_model_has_correct_fields_names(self):
        """
        GIVEN the Account model
        WHEN I look for expected fields
        THEN they are defined in model
        """
        model_fieldnames = [
            field.name
            for field in self.account_model._meta.get_fields()
            if hasattr(fields, field.__class__.__name__)
        ]
        user_has_all_required_fields = all(
            [
                expected_fieldname in model_fieldnames
                for expected_fieldname in self.expected_fieldnames
            ]
        )
        self.assertTrue(
            user_has_all_required_fields,
            f"Missing fields: {list(set(self.expected_fieldnames).difference(set(model_fieldnames)))}",
        )

    def test_account_model_has_correct_fields_types(self):
        """
        GIVEN Account model's field types
        WHEN I confer their types
        THEN they are as expected
        """
        fields_to_check_type = {
            "id": fields.UUIDField,
            "first_name": fields.CharField,
            "last_name": fields.CharField,
            "email": fields.EmailField,
            "zip_code": fields.CharField,
            "street": fields.CharField,
            "city": fields.CharField,
            "state": fields.CharField,
            "created_at": fields.DateTimeField,
            "updated_at": fields.DateTimeField,
        }
        for field_name, field_type in fields_to_check_type.items():
            self.assertIsInstance(
                self.account_model._meta.get_field(field_name), field_type
            )
