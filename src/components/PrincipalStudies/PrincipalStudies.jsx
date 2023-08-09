import React, { useRef } from 'react'
import { principalStudies } from '../../DB/studies'
import { IconContext } from 'react-icons'
import { BiSolidRightArrow } from 'react-icons/bi'

function PrincipalStudies ({ isScrolled }) {
  const scrollUl = useRef(null)

  return (
    <>
      <ul
        ref={scrollUl}
        className='w-[100%] h-[200px] flex gap-3 justify-between scroll-smooth  sm:justify-between items-center shrinh-0  overflow-x-hidden snap-x'
      >
        {principalStudies.map((studie) => (
          <li
            key={studie.studie}
            className=' snap-center flex gap-1 justify-between flex-col border border-[#5B5B5B]  min-w-[100%] h-[100%] items-center text-center rounded-2xl flex-shrink-0'
          >
            <strong className=' w-full bg-red-200 min-h-12 p-3 grid place-content-center text-3xl'>
              {studie.studie}
            </strong>
            <span>{studie.state}</span>
            <span>{studie.school}</span>
          </li>
        ))}
      </ul>
      {!isScrolled && (
        <div className='w-[90%] flex absolute justify-between bottom-20'>
          <IconContext.Provider
            value={{
              className: 'w-[50px] h-[50px] rotate-180 cursor-pointer'
            }}
          >
            <BiSolidRightArrow
              onClick={() => {
                scrollUl.current.scrollLeft -= scrollUl.current.clientWidth
              }}
            />
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              className: 'w-[50px] h-[50px] cursor-pointer'
            }}
          >
            <BiSolidRightArrow
              onClick={() => {
                scrollUl.current.scrollLeft += scrollUl.current.clientWidth
              }}
            />
          </IconContext.Provider>
        </div>
      )}
    </>
  )
}

export { PrincipalStudies }
