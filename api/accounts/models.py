from hashlib import blake2s
from uuid import uuid4

from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from django.db import models

from accounts.utils import STATES_CHOICES


class AccountModel(AbstractUser):
    _zip_code_error_msg = "Zip code must be formed by 8 digits."
    _zip_code_pattern = r"^\d{8}$"

    class Meta:
        verbose_name = "user"
        verbose_name_plural = "users"
        abstract = False
        db_table = "accounts"

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    email = models.EmailField(unique=True, null=False, blank=False)
    first_name = models.CharField(max_length=255, null=False, blank=False)
    last_name = models.CharField(max_length=255)
    zip_code = models.CharField(
        max_length=8,
        validators=[RegexValidator(_zip_code_pattern, _zip_code_error_msg)],
        null=False,
        blank=False,
    )
    street = models.CharField(max_length=255, null=False, blank=False)
    city = models.CharField(max_length=255, null=False, blank=False)
    state = models.CharField(
        max_length=255,
        null=False,
        blank=False,
        choices=STATES_CHOICES,
    )
    created_at = models.DateTimeField(editable=False, auto_now_add=True)
    updated_at = models.DateTimeField(editable=False, auto_now=True)
