# Generated by Django 3.0.6 on 2020-06-21 22:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='message',
            old_name='message',
            new_name='content',
        ),
    ]
