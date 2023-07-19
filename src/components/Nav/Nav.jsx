import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../../context/MyContext/MyContext'

function Nav () {
  const { setIsBurguerMenuActive, movilSize } = useContext(MyContext)

  const styles = ({ isActive }) =>
    isActive
      ? 'p-3 flex h-[40px] sm:h-[100%] w-[90%] sm:w-[33%] justify-center items-center bg-blue-300 text-[#5B5B5B] inline-block w-[33%] text-center overflow-y-hidden'
      : ' p-3 flex h-[40px] sm:h-[100%] w-[90%] sm:w-[33%] justify-center items-center bg-[#CECECE] text-[#5B5B5B] inline-block w-[33%] text-center overflow-y-hidden'

  return (
    <nav className='flex flex-col sm:flex-row  text-xl text-[#CECECE] mr-10 border border-[#CECECE] px-10 h-full sm:h-auto  w-full sm:w-[30%] justify-center  items-center sm:justify-between rounded-lg gap-6 overflow-y-hidden'>
      {movilSize && (
        <NavLink
          to={'/'}
          className={styles}
          onClick={() => setIsBurguerMenuActive(false)}
        >
          {' '}
          Home
        </NavLink>
      )}
      <NavLink
        to={'/about-me'}
        className={styles}
        onClick={() => setIsBurguerMenuActive(false)}
      >
        About me
      </NavLink>
      <NavLink
        to={'/projects'}
        className={styles}
        onClick={() => setIsBurguerMenuActive(false)}
      >
        Projects
      </NavLink>
      <NavLink
        to={'/contact'}
        className={styles}
        onClick={() => setIsBurguerMenuActive(false)}
      >
        Contact me
      </NavLink>
    </nav>
  )
}

export { Nav }
