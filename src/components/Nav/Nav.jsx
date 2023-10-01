import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../../context/MyContext/MyContext'
import './Nav.css'

function Nav () {
  const { setIsBurguerMenuActive, movilSize } = useContext(MyContext)
  const styles = ({ isActive }) =>
    isActive ? 'menu bg-[#ebf5fa] text-[#5B5B5B]' : 'menu bg-[#5B5B5B]/30'

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
        Sobre mí
      </NavLink>
      <NavLink
        to={'/projects'}
        className={styles}
        onClick={() => setIsBurguerMenuActive(false)}
      >
        Proyectos
      </NavLink>
      <NavLink
        to={'/contact'}
        className={styles}
        onClick={() => setIsBurguerMenuActive(false)}
      >
        Contactame
      </NavLink>
      <NavLink
        to={'/diplomas'}
        className={styles}
        onClick={() => setIsBurguerMenuActive(false)}
      >
        Diplomas
      </NavLink>
    </nav>
  )
}

export { Nav }
