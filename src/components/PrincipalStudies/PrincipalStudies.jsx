import React, { useContext, useEffect, useRef, useState } from 'react'
import { principalStudies } from '../../DB/studies'
import { IconContext } from 'react-icons'
import { BiSolidRightArrow } from 'react-icons/bi'
import { MyContext } from '../../context/MyContext/MyContext'

function PrincipalStudies ({ isScrolled }) {
  const scrollUl = useRef(null)
  const [studiesIsHover, setStudiesIsHover] = useState(false)
  const [arrowHover, setArrowHover] = useState(false)
  const [slide, setSlide] = useState(false)
  const { setShowDiploma, setSrcDiploma, showDiploma } = useContext(MyContext)

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
          const newSlide = scrollUl.current.scrollLeft
          setSlide(newSlide)
        }
      }
    }

    const timeoutId = setTimeout(handleSlide, 3000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [slide])

  return (
    <>
      <ul
        ref={scrollUl}
        className=' w-full sm:h-auto flex justify-start scroll-smooth gap-3 sm:justify-between items-start sm:items-center shrinh-0  overflow-hidden snap-x mr-5 '
        onMouseEnter={() => setStudiesIsHover(true)}
        onMouseLeave={() => {
          setStudiesIsHover(false)
        }}
      >
        {principalStudies.map((studie) => (
          <li
            key={studie.studie}
            className=' shadow-lg  shadow-gray-400  snap-center flex gap-1 justify-start flex-col border border-[#5B5B5B]   w-[98%] h-[100%] items-center text-center rounded-2xl flex-shrink-0 '
          >
            <h3 className=' mt-4 sm:mt-0 font-semibold w-full bg-[#555555] text-[#e2e2e2] min-h-12 p-3 grid place-content-center sm:text-3xl rounded-t-2xl font-OleoBold'>
              {studie.studie}
            </h3>
            <div className='flex justify-start sm:justify-between sm:items-center  p-4 w-full flex-col sm:flex-row h-full'>
              <ul className='flex flex-col gap-3 ml-5 sm:w-2/5 justify-center items-center h-full '>
                <li className='border-2 font-semibold border-[#6eadff] text-[#366096]  p-3 rounded-md text-xl w-full sm:w-[100px]'>
                  {studie.state}
                </li>
                <li className='border-2 font-semibold border-[#ff5858] text-[#ff5858] p-3 rounded-md sm:text-xl w-full sm:w-[100px]'>
                  {studie.school}
                </li>
                {studie.state === 'Graduado' && (
                  <li className='list-none'>
                    <button
                      onClick={() => {
                        setShowDiploma(true)
                        setSrcDiploma(studie?.diploma)
                      }}
                      className='font-bold bg-[#389626] hover:border-[#389626] border w-full sm:w-[100px] hover:w-[100%] transition-all duration-200 hover:bg-[#e7ffe3] hover:text-[#389626] cursor-pointer text-[#ffffff] p-3 rounded-md text-xl '
                    >
                      Ver diploma
                    </button>
                  </li>
                )}
              </ul>
              <img
                src={studie.logo}
                alt={studie.studie}
                className='sm:w-2/5 max-h-[100px] p-5 object-contain'
              />
            </div>
          </li>
        ))}
      </ul>
      {!isScrolled && !showDiploma && studiesIsHover && (
        <div
          className='w-[100%] flex absolute justify-between h-auto too-0 sm:top-[calc(40%)]'
          onMouseEnter={() => {
            setStudiesIsHover(true)
            setArrowHover(true)
          }}
          onMouseLeave={() => {
            setArrowHover(false)
          }}
        >
          <div className='p-4  bg-[#d8d8d8] w-[70px] h-[70px] gtext-center flex justify-center items-center rounded-full opacity-70'>
            <IconContext.Provider
              value={{
                className:
                  'w-[40px] h-[40px] rotate-180 cursor-pointer text-[#6eadff]'
              }}
            >
              <BiSolidRightArrow
                onClick={() => {
                  scrollUl.current.scrollLeft -= scrollUl.current.clientWidth
                }}
              />
            </IconContext.Provider>
          </div>
          <div className='p-4  bg-[#d8d8d8] w-[70px] h-[70px] gtext-center flex justify-center items-center rounded-full opacity-70'>
            <IconContext.Provider
              value={{
                className: 'w-[100px] h-[40px] cursor-pointer text-[#6eadff]'
              }}
            >
              <BiSolidRightArrow
                onClick={() => {
                  scrollUl.current.scrollLeft += scrollUl.current.clientWidth
                }}
              />
            </IconContext.Provider>
          </div>
        </div>
      )}
    </>
  )
}

export { PrincipalStudies }
