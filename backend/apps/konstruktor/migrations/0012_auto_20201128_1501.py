# Generated by Django 3.1.3 on 2020-11-28 15:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('konstruktor', '0011_auto_20201128_1428'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='area',
            options={'verbose_name': 'Area', 'verbose_name_plural': 'Area'},
        ),
        migrations.AlterModelOptions(
            name='employment',
            options={'verbose_name': 'занятость 2', 'verbose_name_plural': 'занятость 2'},
        ),
        migrations.AlterModelOptions(
            name='workexperience',
            options={'verbose_name': 'опыт работы', 'verbose_name_plural': 'опыт работы'},
        ),
        migrations.AlterModelOptions(
            name='workschedule',
            options={'verbose_name': 'занятость', 'verbose_name_plural': 'занятость'},
        ),
    ]
