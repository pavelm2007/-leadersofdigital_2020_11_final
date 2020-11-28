# Generated by Django 3.1.3 on 2020-11-28 07:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('konstruktor', '0008_auto_20201128_0737'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Demand',
            new_name='Responsibility',
        ),
        migrations.RemoveField(
            model_name='vacancy',
            name='demands',
        ),
        migrations.AddField(
            model_name='vacancy',
            name='responsibilities',
            field=models.ManyToManyField(to='konstruktor.Responsibility'),
        ),
    ]
