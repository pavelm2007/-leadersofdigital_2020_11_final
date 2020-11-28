
import csv
import datetime
import ast

from django.core.management.base import BaseCommand, LabelCommand, CommandError
from apps.konstruktor.models import *


class Command(LabelCommand):
    help = 'Load data'

    def handle(self, *labels, **options):

        self.levels = {'is_%s' % x.title: x for x in Level.objects.all()}
        self.employment = {e.code: e for e in Employment.objects.all()}
        self.work_schedule = {e.code: e for e in WorkSchedule.objects.all()}
        self.work_experience = {e.code: e for e in WorkExperience.objects.all()}
        
        for label in labels:
            self.handle_demands(label, **options)

    def handle_demands(self, filename, **options):
        reader = csv.DictReader(open(filename, 'rU'), dialect='excel', delimiter="|")
        
        i = 0

        new_objs = []

        for row in reader:
            obj = None
            if row['']:
                obj = Vacancy.objects.filter(external_id=row['']).first()
            if not obj:
                obj = Vacancy(external_id=row[''])

            for opts in [
                        ('vacancy', 'title'), 
                        'compensation_from',
                        'compensation_to'
                    ]:
                if isinstance(opts, tuple):
                    key, field = opts
                else:
                    key = opts
                    field = opts
                if key not in row or not row[key]:
                    continue
                setattr(obj, field, row[key])

            for key in self.levels:
                if row[key] == '1':
                    obj.level = self.levels[key]
                    break
            
            if 'area_id' in row and row['area_id']:
                try:
                    area = Area.objects.get(external_id=row['area_id'])
                except:
                    area = Area.objects.create(external_id=row['area_id'], title=row['area_id'])
                obj.area = area
            
            if 'creation_date' in row and row['creation_date']:
                obj.created = datetime.datetime.strptime(row['creation_date'], '%Y-%m-%d').date()
            
            if 'employment' in row and row['employment']:
                obj.employment = self.get_employment(row['employment'])

            if 'work_schedule' in row and row['work_schedule']:
                obj.work_schedule = self.get_work_schedule(row['work_schedule']) 
            
            if 'work_experience' in row and row['work_experience']:
                obj.work_experience = self.get_work_experience(row['work_experience']) 

            # try:
            #     obj.save()
            # except:
            #     import pdb;pdb.set_trace()


            if obj.pk:
                obj.save()
            else:
                new_objs.append(obj)

            if len(new_objs) == 300:
                Vacancy.objects.bulk_create(new_objs)
                new_objs = []

            continue


            if 'demands' in row:
                reqs = []
                demands = row['demands'][1:-1]
                if demands:
                    try:
                        lines = ast.literal_eval(demands)
                    except:
                        import pdb;pdb.set_trace()
                    for req in lines:
                        try:
                            r = Requirement.objects.get_or_create(title=req)[0]
                        except Exception as e:
                            print(len(req))
                            import pdb; pdb.set_trace()
                        reqs.append(r)
                    if reqs:
                        obj.requirements.clear()
                        obj.requirements.add(*reqs)
            
            if 'key_skills' in row:
                reqs = []
                demands = row['key_skills'][1:-1]
                if demands:
                    try:
                        lines = ast.literal_eval(demands)
                    except:
                        import pdb;pdb.set_trace()
                    for req in lines:
                        try:
                            r = Skill.objects.get_or_create(title=req)[0]
                        except Exception as e:
                            # print(len(req))
                            # import pdb; pdb.set_trace()
                            continue
                        reqs.append(r)
                    if reqs:
                        obj.skills.clear()
                        obj.skills.add(*reqs)

            if 'duties' in row:
                reqs = []
                demands = row['duties'][1:-1]
                if demands:
                    try:
                        lines = ast.literal_eval(demands)
                    except:
                        import pdb;pdb.set_trace()
                    for req in lines:
                        try:
                            r = Responsibility.objects.get_or_create(title=req)[0]
                        except Exception as e:
                            # print(len(req))
                            # import pdb; pdb.set_trace()
                            continue
                        reqs.append(r)
                    if reqs:
                        obj.responsibilities.clear()
                        obj.responsibilities.add(*reqs)
            
            if 'conditions' in row:
                reqs = []
                demands = row['conditions'][1:-1]
                if demands:
                    try:
                        lines = ast.literal_eval(demands)
                    except:
                        import pdb;pdb.set_trace()
                    for req in lines:
                        try:
                            r = Condition.objects.get_or_create(title=req)[0]
                        except Exception as e:
                            # print(len(req))
                            # import pdb; pdb.set_trace()
                            continue
                        reqs.append(r)
                    if reqs:
                        obj.conditions.clear()
                        obj.conditions.add(*reqs)
        
        if new_objs:
            Vacancy.objects.bulk_create(new_objs)

    def get_employment(self, code):
        if code not in self.employment:
            self.employment[code] = Employment.objects.create(code=code, title=code)
        return self.employment[code]

    def get_work_experience(self, code):
        if code not in self.work_experience:
            self.work_experience[code] = WorkExperience.objects.create(code=code, title=code)
        return self.work_experience[code]

    def get_work_schedule(self, code):
        if code not in self.work_schedule:
            self.work_schedule[code] = WorkSchedule.objects.create(code=code, title=code)
        return self.work_schedule[code]
