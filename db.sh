#!/bin/sh
python3.10 backend/manage.py makemigrations
python3.10 backend/manage.py makemigrations job
python3.10 backend/manage.py makemigrations account
python3.10 backend/manage.py migrate
echo "from django.contrib.auth.models import User; User.objects.all().delete(); User.objects.create_superuser('admin', 'admin@example.com', 'pass')" | python3.10 backend/manage.py shell
python3.10 backend/manage.py runserver