# Generated by Django 3.0.7 on 2020-06-30 18:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='chat',
            name='name',
            field=models.CharField(default='private_chat', max_length=20),
        ),
    ]
