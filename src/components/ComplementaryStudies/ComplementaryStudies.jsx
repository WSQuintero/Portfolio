import React from 'react'
import { complementaryStudies } from '../../DB/studies'

function ComplementaryStudies () {
  return (
    <ul>
      {complementaryStudies.map((complementary) => (
        <li key={complementary.studie} className='w-full flex '>
          <div className='w-[70%] flex justify-between '>
            <strong>{complementary.studie}</strong>
            <span>{complementary.state}</span>
          </div>
          <span className='w-[30%] flex justify-end '>
            {complementary.school}
          </span>
        </li>
      ))}
    </ul>
  )
}

export { ComplementaryStudies }
