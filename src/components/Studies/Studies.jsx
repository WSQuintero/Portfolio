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
    <section className=' border-[#5B5B5B] w-full  relative h-full '>
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
        className={`flex overflow-x-hidden w-full scroll-smooth mt-5 ${
          !isScrolled
            ? 'overflow-y-hidden items-center'
            : 'sm:overflow-y-scroll items-start'
        } relative   gap-3`}
        ref={scroll}
      >
        <div className='w-[100%]  shrink-0 top-0 flex justify-center '>
          <PrincipalStudies isScrolled={isScrolled} />
        </div>
        <div className=' w-[100%] shrink-0 '>
          <LogoStudies />
          <div className=' mt-5 rounded-xl h-[20vh]'>
            <ComplementaryStudies />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Studies }
