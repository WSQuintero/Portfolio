import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../../context/MyContext/MyContext'
import './Nav.css'

function Nav () {
  const { setIsBurguerMenuActive, movilSize } = useContext(MyContext)
  const styles = ({ isActive }) => isActive ? 'menu bg-blue-300' : 'menu bg-[#CECECE]'

  return (
    <nav className='nav'>
      {movilSize && (
        <NavLink
          to={'/'}
          className={styles}
          onClick={() => setIsBurguerMenuActive(false)}
        >
          Home
        </NavLink>
      )}
      <NavLink
        to={'/about-me'}
        className={styles}
        onClick={() => setIsBurguerMenuActive(false)}
      >
        Sobre mi
      </NavLink>
      <NavLink
        to={'/projects'}
        className={styles}
        onClick={() => setIsBurguerMenuActive(false)}
      >
        Projectos
      </NavLink>
      <NavLink
        to={'/contact'}
        className={styles}
        onClick={() => setIsBurguerMenuActive(false)}
      >
        Contactame
      </NavLink>
    </nav>
  )
}

export { Nav }
