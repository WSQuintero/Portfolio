import React from 'react'
import { principalStudies } from '../../DB/studies'

function PrincipalStudies () {
  return (
    <div className=' w-[100%]  shrink-0  flex  items-center justify-start   relative '>
      <ul className='w-full flex gap-3 justify-center items-center flex-shrink flex-wrap'>
        {principalStudies.map((studie) => (
          <li
            key={studie.studie}
            className=' flex gap-1 justify-between flex-col border border-[#5B5B5B] w-[150px] h-[100px] items-center text-center'
          >
            <strong className='text-xl'>{studie.studie}</strong>
            <span>{studie.state}</span>
            <span>{studie.school}</span>
          </li>
        ))}
      </ul>
      .
    </div>
  )
}

export { PrincipalStudies }
