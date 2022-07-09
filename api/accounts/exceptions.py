from rest_framework.exceptions import APIException
from rest_framework.status import HTTP_409_CONFLICT, HTTP_422_UNPROCESSABLE_ENTITY


class InvalidZipCodeError(APIException):
    status_code = HTTP_422_UNPROCESSABLE_ENTITY
    default_detail = {"zip_code": ["Invalid zip code."]}


class AlreadyRegisteredUsernameError(APIException):
    status_code = HTTP_409_CONFLICT
    default_detail = {"username": ["A user with that username already exists."]}


class AlreadyRegisteredEmailError(APIException):
    status_code = HTTP_409_CONFLICT
    default_detail = {"email": ["A user with this email already exists."]}
