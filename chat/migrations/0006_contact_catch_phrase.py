# Generated by Django 3.0.7 on 2020-07-08 11:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0005_auto_20200708_0918'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='catch_phrase',
            field=models.CharField(default="P.S I have no special talent, I'm just passionately curious", max_length=100),
        ),
    ]
