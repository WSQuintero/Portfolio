import React from 'react'
import { IconContext } from 'react-icons'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { HiAcademicCap } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'

function ContactIcons () {
  const hash = location.pathname

  return (
    <div
      className={`flex gap-10 justify-center relative ${
        hash === '/about-me' && 'bg-[#8d8d8d]'
      }   ${hash === '/' && 'bg-[#]'} ${
        hash === '/contact' && 'bg-[#8d8d8d]'
      } rounded-2xl p-2`}
    >
      <IconContext.Provider
        value={{
          className: 'w-[40px] h-[40px] text-[#CECECE] cursor-pointer'
        }}
      >
        <a
          href='https://github.com/WSQuintero/'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/wilmer-santiago-quintero-camargo-40926a286/'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillLinkedin />
        </a>
        <NavLink to={'/diplomas'}>
          <HiAcademicCap />
        </NavLink>
      </IconContext.Provider>
    </div>
  )
}

export { ContactIcons }
