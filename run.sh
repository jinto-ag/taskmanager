# =========================================
# This is simple Django project setup file
# Version 1.0
# =========================================
# Create virtualenv
pip install -U virtualenv
virtualenv .env
source .env/bin/activate
pip install -r requirements.txt
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
mkdir static/lib
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
