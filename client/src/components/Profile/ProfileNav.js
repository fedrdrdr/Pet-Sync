import React from 'react'
import { NavLink } from 'react-router-dom'

function ProfileNav(props) {
  return (
    <div className="profile-nav">
      <nav>
        <ul className="profile-menu">
          <li>
            <NavLink
              to="/mypets"
              className="profile-links"
              activeClassName={'profile-links-selected'}
            >
              Мои питомцы
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/appointment"
              className="profile-links"
              activeClassName={'profile-links-selected'}
            >
              Мои записи
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default ProfileNav
