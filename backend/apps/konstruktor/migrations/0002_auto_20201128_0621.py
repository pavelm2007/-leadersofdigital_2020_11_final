# Generated by Django 3.1.3 on 2020-11-28 06:21

from django.db import migrations

DATA = [
    'trainee',
    'junior',
    'middle',
    'senior',
    'lead'
]


def run_code(apps, schema_editor):

    Level = apps.get_model('konstruktor', 'Level')

    for item in DATA:
        Level.objects.get_or_create(title=item)


class Migration(migrations.Migration):

    dependencies = [
        ('konstruktor', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(run_code),
    ]
