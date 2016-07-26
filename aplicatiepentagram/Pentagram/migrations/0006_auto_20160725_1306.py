# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Pentagram', '0005_remove_photo_counter_like'),
    ]

    operations = [
        migrations.RenameField(
            model_name='like',
            old_name='photo_id',
            new_name='photo',
        ),
    ]
