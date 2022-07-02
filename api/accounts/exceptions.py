from rest_framework.exceptions import APIException
from rest_framework.status import HTTP_422_UNPROCESSABLE_ENTITY


class InvalidZipCodeError(APIException):
    status_code = HTTP_422_UNPROCESSABLE_ENTITY
    default_detail = {"error": "Invalid zip code."}
