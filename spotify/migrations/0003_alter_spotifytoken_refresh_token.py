# Generated by Django 3.2 on 2021-04-13 21:25

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('spotify', '0002_alter_spotifytoken_refresh_token'),
    ]

    operations = [
        migrations.AlterField(
            model_name='spotifytoken',
            name='refresh_token',
            field=models.CharField(default=django.utils.timezone.now, max_length=150),
            preserve_default=False,
        ),
    ]
