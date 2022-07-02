from rest_framework import status
from rest_framework.test import APITestCase


class CreateAccountRouteTests(APITestCase):
    @classmethod
    def setUpTestData(cls) -> None:
        cls.account_data = {
            "first_name": "Etnan",
            "last_name": "Sousa",
            "email": "etnan@mail.com",
            "username": "etnan",
            "password": "1234",
            "zip_code": 62580000,
            "street": "Julio Lousada",
            "city": "Acaraú",
            "state": "CE",
        }

        cls.url = "/api/accounts/"

    def test_create_account_route_missing_required_fields(self):
        """
        GIVEN create account route
        WHEN I make a request with missing required fields
        THEN I receive the correct error message
        THEN I creceive the status code 400
        """
        required_fields = ["username", "email", "password", "zip_code", "city", "state"]

        for required_field in required_fields:
            data = {
                field: value
                for field, value in self.account_data.items()
                if field != required_field
            }

            response = self.client.post(self.url, data, format="json")

            self.assertEqual(response.headers["Content-Type"], "application/json")
            self.assertRegex(
                f"{response.json()}", f"^.*({required_field})+.*(required)+.*$"
            )
            self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_create_account_incorrect_zip_code(self):
        """
        GIVEN create account route
        WHEN I make a request with malformed zip code
        THEN I receive the correct error message
        THEN I receive the status code 400
        """
        data = self.account_data.copy()

        wrong_zip_codes = ["1234567", "1234567a", "123456789"]

        for wrong_zip_code in wrong_zip_codes:
            data["zip_code"] = wrong_zip_code

            response = self.client.post(self.url, data, format="json")

            self.assertEqual(response.headers["Content-Type"], "application/json")

            error_msg = "Zip code must be formed by 8 digits."
            self.assertIn(error_msg, f"{response.json()}")

            self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_create_account(self):
        """
        GIVEN create account route
        WHEN I make a request with correct payload
        THEN I receive correnct success response
        THEN I receive the status code 201
        """

        expected_fields = {
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
        }

        response = self.client.post(self.url, self.account_data, format="json")

        self.assertEqual(response.headers["Content-Type"], "application/json")
        self.assertNotIn("password", response.json())
        self.assertEqual(set(response.json()), expected_fields)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
