import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../../context/MyContext/MyContext'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { HiAcademicCap } from 'react-icons/hi2'
import { BurguerMenu } from '../BurguerMenu/BurguerMenu'
import { Nav } from '../Nav/Nav'

function NavBar () {
  const navigate = useNavigate()
  const {
    movilSize,
    listeningResize,
    isBurguerMenuActive,
    setIsBurguerMenuActive
  } = useContext(MyContext)
  
  const handleClickMenu = () => setIsBurguerMenuActive(!isBurguerMenuActive)

  useEffect(() => {
    listeningResize()
  }, [movilSize])

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
          <div className='flex gap-10 justify-center relative xl:left-[calc(0vw+125px)]'>
            <IconContext.Provider
              value={{
                className: 'w-[40px] h-[40px] text-[#CECECE] cursor-pointer'
              }}
            >
              <AiFillGithub />
              <AiFillLinkedin />
              <HiAcademicCap />
            </IconContext.Provider>
          </div>
          <Nav/>
        </>
          )
        : (
        <IconContext.Provider
          value={{ className: 'w-[40px] h-[40px] text-gray-200 ml-10' }}
        >
          <GiHamburgerMenu onClick={handleClickMenu} />
        </IconContext.Provider>
          )}
      {isBurguerMenuActive && <BurguerMenu />}
    </>
  )
}

export { NavBar }
