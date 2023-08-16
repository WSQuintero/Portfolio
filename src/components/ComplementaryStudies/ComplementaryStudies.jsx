import React from 'react'
import { complementaryStudies } from '../../DB/studies'

function ComplementaryStudies () {
  return (
    <ul className='flex flex-col w-full gap-5'>
      {complementaryStudies?.map((complementary) => (
        <li key={complementary.studie} className=' flex border-2 font-semibold border-[#6eadff] text-[#366096]  p-5 rounded-md text-xl w-full '>
          <div className='w-[70%] flex justify-between '>
            <strong>{complementary?.studie}</strong>
          </div>
          <img src={complementary?.logo} alt="logo" className="min-w-[30px] max-w-[70px] object-contain " />
        </li>
      ))}
    </ul>
  )
}

export { ComplementaryStudies }
