# Generated by Django 4.0.5 on 2023-11-27 13:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0003_useraccount_username2'),
    ]

    operations = [
        migrations.RenameField(
            model_name='useraccount',
            old_name='username2',
            new_name='username1',
        ),
    ]
