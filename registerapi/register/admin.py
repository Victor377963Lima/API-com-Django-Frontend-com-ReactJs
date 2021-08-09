from django.contrib import admin
from register.models import Usuario

# Register your models here.

class Usuarios(admin.ModelAdmin):
    list_display = ('id', 'cpf', 'email')
    list_display_links = ('id',)
    search_fields = ('cpf',)

admin.site.register(Usuario, Usuarios)
