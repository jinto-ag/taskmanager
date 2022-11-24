from datetime import datetime

from actstream.managers import ActionManager, stream
from django.contrib.contenttypes.models import ContentType


class CustomActionManager(ActionManager):
    @stream
    def mystream(self, obj, verb="posted", time=None):
        if time is None:
            time = datetime.now()
        return obj.actor_actions.filter(verb=verb, timestamp__lte=time)