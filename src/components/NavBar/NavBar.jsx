import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { MyContext } from '../../context/MyContext/MyContext'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { HiAcademicCap } from 'react-icons/hi2'
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
            src='/logo_header-01.svg '
            alt=''
            className='w-[150px] h-[80%] rounded-3xl cursor-pointer bg-[#CECECE] ml-10'
            onClick={() => navigate('/')}
          />
          <div className='flex gap-10 justify-center relative left-[calc(0vw+125px)]'>
            <IconContext.Provider value={{ className: 'w-[40px] h-[40px] text-[#CECECE] cursor-pointer' }}>
              <AiFillGithub/>
              <AiFillLinkedin/>
              <HiAcademicCap/>
            </IconContext.Provider>
          </div>
          <nav className='flex gap-3 text-xl text-[#CECECE] mr-10 border border-[#CECECE] px-10 py-2 w-[30%] justify-between rounded-lg'>
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
