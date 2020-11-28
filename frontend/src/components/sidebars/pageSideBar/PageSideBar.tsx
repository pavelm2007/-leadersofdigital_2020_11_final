import React from 'react'
import { Link } from 'react-router-dom'

function PageSideBar() {
  return (
    <aside className="left-sidebar" data-sidebarbg="skin5">
      <div className="scroll-sidebar">
        <nav className="sidebar-nav">
          <ul id="sidebarnav" className="p-t-30">
            <li className="sidebar-item">
              <Link className="sidebar-link waves-effect waves-dark sidebar-link" to={'/vacancies'}>
                <i className="mdi mdi-view-dashboard"/>
                <span className="hide-menu">Вакансии</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default PageSideBar