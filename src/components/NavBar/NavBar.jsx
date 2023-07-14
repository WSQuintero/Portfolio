import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function NavBar () {
  const navigate = useNavigate()

  return (
    <>
      <img
        src='/navLogo_Mesa de trabajo 1_Mesa de trabajo 1.svg '
        alt=''
        className='w-[20%] cursor-pointer'
        onClick={() => navigate('/')}
      />
      <nav className='flex gap-3 text-xl w-[20vw] justify-between'>
        <NavLink to={'/about-me'}>About me</NavLink>
        <NavLink to={'/projects'}>Projects</NavLink>
        <NavLink to={'/contact'}>Contact me</NavLink>
      </nav>
    </>
  )
}

export { NavBar }
