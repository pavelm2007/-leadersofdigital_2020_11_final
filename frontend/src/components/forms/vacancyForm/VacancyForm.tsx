import React, {useState} from 'react'
import {Checkboxes, Input, MultiSelect, Select} from '../../controls'
import {TVacancyFormData} from '../../../types'

const initFormData = {
  specialty: {},
  level: [],
  experience: '',
  typeWork: [],
  duties: [],
  requirements: [],
  conditions: [],
  skills: [],
  stack: []
}

type TFieldNames = 'specialty' | 'level' | 'experience' | 'typeWork' | 'duties'
  | 'requirements' | 'conditions' | 'skills' | 'stack'

interface IVacancyForm {
  onSubmit(data: TVacancyFormData): void
}

const VacancyForm = ({onSubmit}: IVacancyForm) => {
  const [formData, setFormData] = useState<TVacancyFormData>(initFormData)

  const handleInput = (fieldName: TFieldNames, v: any) => {
    console.log(v)
    setFormData({...formData, [fieldName]: v})
  }

  const handleSubmit = () => {
    onSubmit(formData)
  }

  const levelItems = [
    {label: 'Стажер', value: 1},
    {label: 'Junior', value: 2},
    {label: 'Middle', value: 3},
    {label: 'Senior', value: 4}
  ]

  const experience = [
    {label: '0-1 года', value: 1},
    {label: '1-3 года', value: 2},
    {label: '3-7 года', value: 3}
  ]

  const typeWork = [
    {label: 'Полная занятость', value: 1},
    {label: 'Частичная занятость', value: 2},
    {label: 'Вахта', value: 3},
    {label: 'Удалённая работа', value: 4},
    {label: 'Стажировка', value: 5}
  ]

  const multiSel = [
    {label: 'Полная занятость', value: 1},
    {label: 'Частичная занятость', value: 2},
    {label: 'Вахта', value: 3},
    {label: 'Удалённая работа', value: 4},
    {label: 'Стажировка', value: 5}
  ]

  const multiSelInits = [
    {label: 'Полная занятость', value: 1},
    {label: 'Частичная занятость', value: 2}
  ]

  const specialities = [
    {label: 'python разработчик', value: 1},
    {label: 'дизайнер', value: 2}
  ]

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title m-b-0">Вакансия</h5>
        <Select
          label={'Специальность'}
          items={specialities}
          value={formData.specialty}
          onChange={async (v) => handleInput('specialty', v)}/>
        <Checkboxes direction={'horizontal'} items={levelItems} value={formData.level}
                    onChange={async (v) => handleInput('level', v)}/>
        <div className="form-group">
          <label>Заработная плата</label>
          <div className="row">
            <div className={'col-md-6'}>
              <Input
                label={'от'}
                value={formData.specialty}
                onChange={async (v) => handleInput('specialty', v)}/>
            </div>
            <div className={'col-md-6'}>
              <Input
                label={'до'}
                value={formData.specialty}
                onChange={async (v) => handleInput('specialty', v)}/>
            </div>
          </div>
        </div>

        <Select label={'Опыт работы'} items={experience} value={formData.experience}
                onChange={async (v) => handleInput('experience', v)}/>
        <Checkboxes label={'Тип занятости'} items={typeWork} value={formData.typeWork}
                    onChange={async (v) => handleInput('typeWork', v)}/>
        <MultiSelect
          label={'Обязанности'}
          items={experience}
          value={formData.duties}
          inits={formData.duties}
          onChange={async (v) => handleInput('duties', v)}/>
        <MultiSelect
          label={'Требования'}
          items={experience}
          value={formData.requirements}
          inits={formData.requirements}
          onChange={async (v) => handleInput('requirements', v)}/>
        <MultiSelect
          label={'Условия'}
          items={experience}
          value={formData.conditions}
          inits={formData.conditions}
          onChange={async (v) => handleInput('conditions', v)}/>
        <MultiSelect
          label={'Ключевые навыки'}
          items={experience}
          value={formData.skills}
          inits={formData.skills}
          onChange={async (v) => handleInput('skills', v)}/>
        <MultiSelect
          label={'Стек технологий'}
          items={experience}
          value={formData.stack}
          inits={formData.stack}
          onChange={async (v) => handleInput('stack', v)}/>

      </div>
      <div className="border-top">
        <div className="card-body">
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Сохранить</button>
        </div>
      </div>
    </div>
  )
}

export default VacancyForm
