from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import *


class VacancyAdmin(admin.ModelAdmin):
    list_display = ['title', 'level', 'compensation_from', 'compensation_to', 'external_id', 'created']
    raw_id_fields = [
        'requirements', 'skills', 'responsibilities', 'level', 
        'conditions', 'area', 'employment', 'work_experience', 'work_schedule'
    ]

    def reqs(self, obj):
        return mark_safe('<BR>'.join([str(o) for o in obj.requirements.all()]))


admin.site.register(Vacancy, VacancyAdmin)
admin.site.register(Level)
admin.site.register(Requirement)
admin.site.register(Skill)
admin.site.register(Responsibility)
admin.site.register(Condition)
admin.site.register(Area)
admin.site.register(Employment)
admin.site.register(WorkSchedule)
admin.site.register(WorkExperience)
