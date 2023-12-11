from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError

UserModel = get_user_model()


def custom_validation(data):
    email = data.get('email', '').strip()
    username = data.get('username', '').strip()
    password = data.get('password', '').strip()

    # Validate email
    if not email:
        raise ValidationError('An email is needed.')
    if UserModel.objects.filter(email=email).exists():
        raise ValidationError('Email already in use, choose another email.')

    # Validate password
    if not password:
        raise ValidationError('A password is needed.')
    if len(password) < 8:
        raise ValidationError('Choose another password, minimum 8 characters.')

    # Validate username
    if not username:
        raise ValidationError('A username is needed.')

    return data


def validate_email(data):
    email = data.get('email', '').strip()
    if not email:
        raise ValidationError('An email is needed.')
    if UserModel.objects.filter(email=email).exists():
        raise ValidationError('Email already in use, choose another email.')
    return True


def validate_username(data):
    username = data.get('username', '').strip()
    if not username:
        raise ValidationError('A username is needed.')
    return True


def validate_password(data):
    password = data.get('password', '').strip()
    if not password:
        raise ValidationError('A password is needed.')
    if len(password) < 8:
        raise ValidationError('Choose another password, minimum 8 characters.')
    return True
