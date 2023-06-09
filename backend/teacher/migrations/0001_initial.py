# Generated by Django 4.1.2 on 2022-10-08 01:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Teacher',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('hour_price', models.DecimalField(decimal_places=2, max_digits=9)),
                ('description', models.TextField()),
                ('photo', models.URLField(max_length=255)),
            ],
        ),
    ]
