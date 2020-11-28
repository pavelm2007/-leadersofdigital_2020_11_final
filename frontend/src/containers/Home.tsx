import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import withPrivateLayout from '../hoc/withProvateLayout'
import {RootState} from '../reducers'
import {setPage} from '../actions/page'
import {connect, ConnectedProps} from 'react-redux'

const mapState = ({auth}: RootState) => ({})
const mapDispatch = {setPage}
const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

export const Home = ({setPage}: Props) => {

  useEffect(() => {
    setPage({title: '', breadcrumbs: []})
  }, [])

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="card card-hover">
                <Link
                  className="box bg-cyan text-center"
                  to={'/vacancies/create'}>
                  <h1 className="font-light text-white"><i className="mdi mdi-grease-pencil"/></h1>
                  <h6 className="text-white">Создать вакансию</h6>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="card card-hover">
                <Link className="box bg-warning text-center" to={'/vacancies'}>
                  <h1 className="font-light text-white"><i className="mdi mdi-view-dashboard"/></h1>
                  <h6 className="text-white">Вакансии</h6>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="card card-hover">
                <div className="box bg-success text-center">
                  <h1 className="font-light text-white"><i className="mdi mdi-chart-areaspline"/></h1>
                  <h6 className="text-white">Отчеты</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title m-b-0">Вакансий за месяц</h4>
              <div className="m-t-20">
                <div className="d-flex no-block align-items-center">
                  <span>81% Закрыто</span>
                  <div className="ml-auto">
                    <span>125</span>
                  </div>
                </div>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '81%'}}/>
                </div>
              </div>
              <div>
                <div className="d-flex no-block align-items-center m-t-25">
                  <span>72% В работе</span>
                  <div className="ml-auto">
                    <span>120</span>
                  </div>
                </div>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped bg-success" role="progressbar"
                       style={{width: '72%'}}/>
                </div>
              </div>
              <div>
                <div className="d-flex no-block align-items-center m-t-25">
                  <span>3% Не обработано</span>
                  <div className="ml-auto">
                    <span>8</span>
                  </div>
                </div>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped bg-danger" role="progressbar"
                       style={{width: '3%'}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default connector(withPrivateLayout(Home))
