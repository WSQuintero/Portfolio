import React, { useEffect, useRef, useState } from 'react'
import { principalStudies } from '../../DB/studies'
import { IconContext } from 'react-icons'
import { BiSolidRightArrow } from 'react-icons/bi'

function PrincipalStudies ({ isScrolled }) {
  const scrollUl = useRef(null)
  const [studiesIsHover, setStudiesIsHover] = useState(false)
  const [arrowHover, setArrowHover] = useState(false)
  const [slide, setSlide] = useState(false)

  useEffect(() => {
    const handleSlide = () => {
      if (!arrowHover) {
        const totalSize = scrollUl.current.clientWidth * principalStudies.length
        const newSlide =
          scrollUl.current.scrollLeft + scrollUl.current.clientWidth
        setSlide(newSlide)
        if (
          totalSize > slide &&
          !studiesIsHover &&
          !arrowHover &&
          !isScrolled
        ) {
          scrollUl.current.scrollLeft = newSlide
        } else {
          scrollUl.current.scrollLeft = 0
          const newSlide =
            scrollUl.current.scrollLeft
          setSlide(newSlide)
        }
      }
    }

    const timeoutId = setTimeout(handleSlide, 3000)
    return () => {
      clearTimeout(timeoutId) // Limpiar el timeout al desmontar el componente o al actualizar el efecto
    }
  }, [slide])

  return (
    <>
      <ul
        ref={scrollUl}
        className='w-[100%] h-[200px] flex gap-3 justify-between scroll-smooth  sm:justify-between items-center shrinh-0  overflow-hidden snap-x'
        onMouseEnter={() => setStudiesIsHover(true)}
        onMouseLeave={() => {
          setStudiesIsHover(false)
        }}
      >
        {principalStudies.map((studie) => (
          <li
            key={studie.studie}
            className=' snap-center flex gap-1 justify-between flex-col border border-[#5B5B5B]  min-w-[100%] h-[100%] items-center text-center rounded-2xl flex-shrink-0 p-5'
          >
            <strong className=' w-full bg-red-600 text-white min-h-12 p-3 grid place-content-center text-3xl rounded-t-2xl'>
              {studie.studie}
            </strong>
            <div className='flex justify-between items-center h-full p-4'>
              <span>{studie.state}</span>
              <span>{studie.school}</span>
              <img
                src={studie.logo}
                alt={studie.studie}
                className='w-2/6 p-5'
              />
            </div>
          </li>
        ))}
      </ul>
      {!isScrolled && studiesIsHover && (
        <div
          className='w-[90%] flex absolute justify-between bottom-10'
          onMouseEnter={() => {
            setStudiesIsHover(true)
            setArrowHover(true)
          }}
          onMouseLeave={() => {
            setArrowHover(false)
          }}
        >
          <IconContext.Provider
            value={{
              className:
                'w-[100px] h-[100px] rotate-180 cursor-pointer text-[#5B5B5B]/30'
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
              className: 'w-[100px] h-[100px] cursor-pointer text-[#5B5B5B]/30'
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
