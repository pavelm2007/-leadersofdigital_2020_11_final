import React, {useEffect} from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {RouteComponentProps} from 'react-router-dom'
import {RootState} from '../reducers'
import {setPage} from '../actions/page'
import withPrivateLayout from '../hoc/withProvateLayout'
import {VacancyForm} from '../components/forms'
import {TVacancyFormData} from '../types'


const mapState = ({auth}: RootState) => ({
  auth: auth
})

const mapDispatch = {
  setPage
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type TParams = { vacancyId?: string };
type Props = PropsFromRedux & RouteComponentProps<TParams> & {}

export const VacancyEdit = (props: Props) => {
  useEffect(() => {
    props.setPage({
      title: 'Создать вакансию',
      breadcrumbs: [{to: '/', title: 'Главная'}, {to: '/vacancies', title: 'Вакансии'}, {
        to: '/vacancies/create',
        title: 'Создать вакансию'
      }]
    })
  })

  const handleSubmit = (formData: TVacancyFormData) => {
    console.log(formData)
  }

  return (
    <div className="row">
      <div className="col-md-8">
        <VacancyForm onSubmit={(d)=>handleSubmit(d)}/>
      </div>
    </div>
  )
}

export default connector(withPrivateLayout(VacancyEdit))
