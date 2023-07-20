import React from 'react'
import { IconContext } from 'react-icons'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { HiAcademicCap } from 'react-icons/hi2'

function ContactIconsTwo () {
  return (
    <div className='flex gap-10 justify-center relative '>
      <IconContext.Provider
        value={{
          className: 'w-[40px] h-[40px] text-[#5B5B5B] cursor-pointer'
        }}
      >
        <AiFillGithub />
        <AiFillLinkedin />
        <HiAcademicCap />
      </IconContext.Provider>
    </div>
  )
}

export { ContactIconsTwo }
