import React from 'react'
import { IconContext } from 'react-icons'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { HiAcademicCap } from 'react-icons/hi2'

function ContactIcons () {
  return (
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
  )
}

export { ContactIcons }