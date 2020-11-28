from .local_base import *  # noqa

SECRET_KEY = '9($(jvov0rf4_elgas(%1f&%)93-^gb^go*5s1us_-@^c5)@b4'

ALLOWED_HOSTS = ['*']

import environ
env = environ.Env()

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': env('DB_NAME'),
        'USER': env('DB_USER'),
        'PASSWORD': env('DB_PWD'),
        'HOST': env('DB_HOST'),
        'PORT': '5432',
    }
}
