import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { MyContext } from '../../context/MyContext/MyContext'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IconContext } from 'react-icons'

function NavBar () {
  const navigate = useNavigate()
  const { movilSize, listeningResize } = useContext(MyContext)

  listeningResize()

  return (
    <>
      {!movilSize
        ? (
        <>
          <img
            src='/navLogo_Mesa de trabajo 1_Mesa de trabajo 1.svg '
            alt=''
            className='w-[200px] cursor-pointer '
            onClick={() => navigate('/')}
          />
          <nav className='flex gap-3 text-xl '>
            <NavLink to={'/about-me'}>About me</NavLink>
            <NavLink to={'/projects'}>Projects</NavLink>
            <NavLink to={'/contact'}>Contact me</NavLink>
          </nav>
        </>
          )
        : (
        <IconContext.Provider
          value={{ className: 'w-[40px] h-[40px] text-gray-200 ml-10' }}
        >
          <GiHamburgerMenu />
        </IconContext.Provider>
          )}
    </>
  )
}

export { NavBar }
