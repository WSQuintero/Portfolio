import React, { useRef, useState } from 'react'
import { ButtonArrowRight } from '../ButtonArrowRight/ButtonArrowRight'
import { PrincipalStudies } from '../PrincipalStudies/PrincipalStudies'
import { LogoStudies } from '../LogoStudies/LogoStudies'
import { ComplementaryStudies } from '../ComplementaryStudies/ComplementaryStudies'

function Studies () {
  const scroll = useRef(null)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    const containerScrollWidth = scroll.current.clientWidth
    if (!isScrolled) {
      scroll.current.scrollLeft += containerScrollWidth
      setIsScrolled(true)
    } else {
      scroll.current.scrollLeft = 0
      setIsScrolled(false)
    }
  }
  return (
    <section className=' border-[#5B5B5B] w-full  relative h-auto  '>
      <h2 className=' text-5xl text-blue-400 w-[99%] text-start flex justify-between items-center   '>
        {!isScrolled ? 'Estudios principales' : 'Estudios Complementarios'}
        <span>
          <ButtonArrowRight
            handleScroll={handleScroll}
            isScrolled={isScrolled}
          />
        </span>
      </h2>
      <div
        className={
          'flex overflow-x-hidden w-full scroll-smooth mt-5 relative   gap-3 h-[30vh] '
        }
        ref={scroll}
      >
        <div className='w-[100%]  shrink-0 top-0 flex justify-center  '>
          <PrincipalStudies isScrolled={isScrolled} />
        </div>
        <div className=' w-full shrink-0  flex flex-col items-center'>
          <LogoStudies />
          <div className=' mt-5 rounded-xl border border-gray-600 p-10 w-[90%] h-[70%] overflow-scroll'>
            <ComplementaryStudies />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Studies }
