import React from 'react'
import { imgLogos } from '../../DB/imgLogos'

function LogoStudies () {
  return (
    <ul className='flex justify-between items-center w-full '>
      {imgLogos?.map((logo, index) => (
        <li key={index} className='list-none'>
          <img src={logo} alt='class-logo' className='w-[80px] h-[80px] shrink-0 object-contain' />
        </li>
      ))}
    </ul>
  )
}

export { LogoStudies }
