# Generated by Django 3.0.7 on 2020-07-08 11:45

import chat.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0007_auto_20200708_1143'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to=chat.models.upload_path),
        ),
    ]
