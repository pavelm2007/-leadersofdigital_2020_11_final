import React from 'react'
import Moment from 'react-moment'
import {Link} from 'react-router-dom'
import {IVacancyItem} from '../../../types'

const VacancyListCard = ({id, title, description, created}: IVacancyItem) => {
  return (
    <div className={'card vacancy_card'}>
      <div className="card-body">
        <div className="comment-widgets">
          <div className="d-flex flex-row comment-row m-t-0 hover_off">
            <div className="comment-text w-100">
              <Link className="vacancy_card__title font-medium" to={`/vacancies/${id}`}>{title}</Link>
              <span className="m-b-15 d-block">{description} </span>
              <div className="comment-footer">
                <span className="text-muted float-right"><Moment date={created} format="DD.MM.YYYY"/></span>
                <span className={'badge badge-primary'}>15</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VacancyListCard