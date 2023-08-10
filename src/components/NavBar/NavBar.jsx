import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../../context/MyContext/MyContext'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import { BurguerMenu } from '../BurguerMenu/BurguerMenu'
import { Nav } from '../Nav/Nav'
import { ContactIcons } from '../ContactIcons/ContactIcons'

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
          <ContactIcons />
          <Nav />
        </>
          )
        : (
        <IconContext.Provider
          value={{ className: `w-[40px] h-[40px] text-[#ebf5fa] ml-10 ${location.pathname === '/about-me' && 'text-gray-700'}` }}
        >
          <GiHamburgerMenu onClick={handleClickMenu} />
        </IconContext.Provider>
          )}
      {isBurguerMenuActive && <BurguerMenu />}
    </>
  )
}

export { NavBar }
