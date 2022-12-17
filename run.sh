# =========================================
# This is simple Django project setup file
# Version 1.0
# =========================================
# Create virtualenv
# pip install -U virtualenv
# virtualenv .env
# source .env/bin/activate
# pip install -r requirements.txt
# Settings files
mkdir $1/config
touch $1/config/__init__.py
touch $1/config/development.py
touch $1/config/production.py
touch $1/config/base.py
mv $1/settings.py $1/config/settings.py
touch $1/settings.py
touch .env
# Create required folders
mkdir templates
mkdir static
mkdir media
# Templates folders
mkdir templates/registration
mkdir templates/partials
mkdir templates/core
mkdir templates/user
# Static folders
mkdir static/js
mkdir static/css
mkdir static/img
mkdir static/libr
mkdir static/font
# Media folders
mkdir media/default
# Create files required for registration
touch templates/registration/password_reset_form.html
touch templates/registration/password_reset_confirm.html
touch templates/registration/password_reset_done.html
touch templates/registration/password_change_form.html
touch templates/registration/password_change_done.html
touch templates/registration/login.html
touch templates/registration/logged_out.html
touch templates/registration/signup.html
# Create partial template files
touch templates/partials/_navigation.html
touch templates/partials/_message.html
touch templates/partials/_footer.html
touch templates/partials/_style.html
touch templates/partials/_script.html
touch templates/_base.html
# Create default templates
touch templates/core/home.html
touch templates/core/about.html
touch templates/core/contact.html
# Create templates for user
touch templates/user/profile.html
touch templates/user/dashboard.html
touch templates/user/settings.html
# Media folde
touch media/default/test.txt
# Django apps creation
python manage.py startapp user
python manage.py startapp core
## Create files for dajngo apps
# for core app
touch core/urls.py
touch core/forms.py
touch core/mixins.py
touch core/signals.py
touch core/utils.py
touch core/base.py
touch core/context_processors.py
touch core/managers.py
# for user app
touch user/urls.py
touch user/forms.py
touch user/mixins.py
touch user/signals.py
touch user/utils.py
touch user/base.py
touch user/managers.py
# Static files
touch static/js/script.js
touch static/css/style.css
touch static/css/font.css
touch static/css/constant.css
touch static/img/test.txt #for git
touch static/libr/test.txt #for git
touch static/font/test.txt #for git
# add content for urls.py

# Add settings for base.py
cat << EOF > $1/config/base.py
from .settings import *

import environ

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = BASE_DIR.parent

env = environ.Env()
env.read_env(BASE_DIR / ".env")


DEBUG = env.bool("DEBUG")
SECRET_KEY = env.str("SECRET_KEY")

ALLOWED_HOSTS = ["127.0.0.1", "localhost"]

THIRD_PARTY_APPS = []

LOCAL_APPS = [
    "core",
    "user",
]

INSTALLED_APPS += THIRD_PARTY_APPS + LOCAL_APPS

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]


STATIC_ROOT = "static_root"
STATICFILES_DIRS = [BASE_DIR / "static"]

# Media Files
MEDIA_URL = "media/"
MEDIA_ROOT = BASE_DIR / "media"

# Custom user
AUTH_USER_MODEL = "user.User"
EOF

cat << EOF > $1/config/development.py
from .base import *

DEBUG = True
ALLOWED_HOSTS = ["127.0.0.1", "localhost"]

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}
EOF

cat << EOF > $1/config/production.py
from .base import *

DEBUG = False
ALLOWED_HOSTS = ["127.0.0.1", "localhost"]
EOF

cat << EOF > $1/settings.py
from pathlib import Path

from .config.base import *

DEBUG = env.bool("DEBUG")

if DEBUG:
    from .config.development import *
else:
    from .config.production import *
EOF

cat << EOF > .env
SECRET_KEY=django-insecure-_jrbw_5xg0f!v*-#)&h2tj-=3iz&y1t33q_7je9p^dij18&y!m
DEBUG=True
EOF


cat << EOF > user/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass
EOF

cat << EOF > user/urls.py
from django.urls import path


app_name = "user"

urlpatterns = []
EOF