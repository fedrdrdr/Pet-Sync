import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { VscClose } from 'react-icons/vsc'
import './Nav.css'
import { useDispatch, useSelector } from 'react-redux'
import { checkUsersAC } from '../../utils/redux/actionCreators/actionCreators'
import AuthService from '../../services/AuthServices'

function Nav() {
  const [icon, setIcon] = useState(false)
  const userState = useSelector((state) => state.usersReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {}
  }, [])

  useEffect(() => {
    ;(async () => {
      if (localStorage.getItem('token')) {
        const response = await AuthService.checkAuth()
        dispatch(checkUsersAC(response.data.user))
      }
    })()
  }, [dispatch])

  const handlerLogout = async (event) => {
    try {
      await AuthService.logout()
      localStorage.removeItem('token')
      dispatch(checkUsersAC({}))
    } catch (e) {
      console.log(e.response?.data?.message)
    }
  }

  return (
    <>
      {userState.isAuth && userState.user.isActivated ? (
        <nav className="navbar-item">
          <NavLink to="/" className="navbar-logo">
            <img src="/logomain.png" width="130px" alt="logo" />
          </NavLink>
          <div onClick={() => setIcon(!icon)} className="menu-icon">
            {icon ? <VscClose /> : <FiMenu />}
          </div>
          <ul className={icon ? 'nav-menu active' : 'nav-menu'}>
            <li>
              <NavLink
                onClick={() => setIcon(false)}
                to="/mypets"
                className="nav-links"
              >
                Профиль
              </NavLink>
            </li>
            <li>
              <Link to="" onClick={() => handlerLogout()} className="nav-links">
                Выйти
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="navbar-item">
          <NavLink to="/" className="navbar-logo">
            <img src="/logomain.png" width="130px" alt="logo" />
          </NavLink>
          <div onClick={() => setIcon(!icon)} className="menu-icon">
            {icon ? <VscClose /> : <FiMenu />}
          </div>
          <ul className={icon ? 'nav-menu active' : 'nav-menu'}>
            <li>
              <NavLink
                onClick={() => setIcon(false)}
                to="/login"
                className="nav-links-login"
              >
                Войти
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  )
}

export default Nav
