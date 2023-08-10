import React from 'react'
import { IconContext } from 'react-icons'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { HiAcademicCap } from 'react-icons/hi2'

function ContactIcons () {
  const hash = location.pathname

  console.log(hash)
  return (
    <div
      className={`flex gap-10 justify-center relative ${
        hash === '/about-me' && ''
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
        <a href='' target='_blank'>
          <HiAcademicCap />
        </a>
      </IconContext.Provider>
    </div>
  )
}

export { ContactIcons }
