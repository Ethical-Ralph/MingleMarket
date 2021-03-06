from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from rest_auth.registration.views import SocialLoginView
from django.shortcuts import render, get_object_or_404
from .models import Chat, Contact
from django.contrib.auth.models import User


class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter


def get_last_10_messages(chatID):
    chat = get_object_or_404(Chat, id=chatID)
    return chat.messages.order_by('-timestamp').all()[:10]

def get_user_contact(username):
    user = get_object_or_404(User, username=username)
    return get_object_or_404(Contact, user=user)

def get_current_chat(chatId):
    return get_object_or_404(Chat, id=chatId)