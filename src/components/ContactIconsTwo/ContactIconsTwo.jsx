import React from 'react'
import { IconContext } from 'react-icons'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { HiAcademicCap } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'

function ContactIconsTwo () {
  return (
    <div className='flex gap-10 justify-center relative '>
      <IconContext.Provider
        value={{
          className: 'w-[40px] h-[40px] text-[#5B5B5B] cursor-pointer'
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
          href='https://www.linkedin.com/in/webdevsantiagoquintero/'
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

export { ContactIconsTwo }
