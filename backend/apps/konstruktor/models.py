from django.db import models


class Level(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title


class Requirement(models.Model):
    title = models.CharField(max_length=2000)

    class Meta:
        verbose_name = 'Требования'
        verbose_name_plural = 'Требования'


    def __str__(self):
        return self.title

class Skill(models.Model):
    title = models.CharField(max_length=2000)

    class Meta:
        verbose_name = 'Навыки'
        verbose_name_plural = 'Навыки'

    def __str__(self):
        return self.title


class Responsibility(models.Model):
    title = models.CharField(max_length=2000)

    class Meta:
        verbose_name = 'Обязаности'
        verbose_name_plural = 'Обязаности'

    def __str__(self):
        return self.title


class Condition(models.Model):
    title = models.CharField(max_length=2000)

    class Meta:
        verbose_name = 'условия работы'
        verbose_name_plural = 'условия работы'

    def __str__(self):
        return self.title


class Area(models.Model):
    title = models.CharField(max_length=2000)
    external_id = models.CharField(max_length=75, blank=True, null=True, db_index=True)

    class Meta:
        verbose_name = 'Area'
        verbose_name_plural = 'Area'

    def __str__(self):
        return self.title


class WorkSchedule(models.Model):
    title = models.CharField(max_length=255)
    code = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'график работы'
        verbose_name_plural = 'график работы'

    def __str__(self):
        return self.title


class Employment(models.Model):
    title = models.CharField(max_length=255)
    code = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'занятость'
        verbose_name_plural = 'занятость'

    def __str__(self):
        return self.title


class WorkExperience(models.Model):
    title = models.CharField(max_length=255)
    code = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'опыт работы'
        verbose_name_plural = 'опыт работы'

    def __str__(self):
        return self.title


class Vacancy(models.Model):
    title = models.CharField(max_length=255)
    level = models.ForeignKey(Level, on_delete=models.SET_NULL, blank=True, null=True)
    compensation_from = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    compensation_to = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    external_id = models.PositiveIntegerField(blank=True, null=True)
    requirements = models.ManyToManyField(Requirement)
    skills = models.ManyToManyField(Skill)
    responsibilities = models.ManyToManyField(Responsibility)
    conditions = models.ManyToManyField(Condition)
    area = models.ForeignKey(Area, blank=True, null=True, on_delete=models.SET_NULL)
    employment = models.ForeignKey(Employment, blank=True, null=True, on_delete=models.SET_NULL)
    work_experience = models.ForeignKey(WorkExperience, blank=True, null=True, on_delete=models.SET_NULL)
    work_schedule = models.ForeignKey(WorkSchedule, blank=True, null=True, on_delete=models.SET_NULL)
    created = models.DateField(blank=True, null=True)

    class Meta:
        verbose_name = "ввакансия"
        verbose_name_plural = 'вакансии'

    def __str__(self):
        return self.title
