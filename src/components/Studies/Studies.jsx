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
    <article className='border border-[#5B5B5B] p-5 w-full relative'>
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
        className=' flex overflow-x-hidden sm:overflow-y-hidden w-full items-center scroll-smooth   mt-5 relative '
        ref={scroll}
      >
        <PrincipalStudies />
        <div className=' w-[100%] shrink-0 '>
          <LogoStudies/>
          <div className='border border-gray-600 ml-2 p-5 mt-5'>
            <ComplementaryStudies />
          </div>
        </div>
      </div>
    </article>
  )
}

export { Studies }
