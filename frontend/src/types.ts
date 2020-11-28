export interface IBreadcrumb {
  to: string
  title: string
}

export interface IPage {
  title: string
  breadcrumbs: IBreadcrumb[]
}

export interface IVacancyItem {
  id: number
  created: string
  title: string
  description: string
}

export type TVacancyItem = IVacancyItem

export interface IVacancyDetail {
  id: number
  created: string
  title: string
  description: string
}

export interface IVacancyFormData {
  specialty: any
  level: any[]
  typeWork: any[]
  experience: any
  duties: any[],
  requirements: any[],
  conditions: any[],
  skills: any[],
  stack: any[]
}

export type TVacancyFormData = IVacancyFormData

export interface ISelectItem {
  label: string
  value: string | number
}