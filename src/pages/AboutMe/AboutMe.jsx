import React, { useRef, useState } from 'react'
import { IconContext } from 'react-icons'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { imgLogos } from '../../DB/imgLogos'
import { principalStudies, complementaryStudies } from '../../DB/studies'
import './AbotMe.css'

function AboutMe () {
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
    <div className='min-h-[100vh] w-full flex flex-col lg:flex-row pt-20 relative'>
      <section className='w-full lg:w-2/4 bg-[#CECECE]  flex  relative '>
        <figure className='flex flex-col items-center justify-center w-full'>
          <img
            src='https://i.ibb.co/zsV8sCM/Vectorizaci-n-composici-n-Mesa-de-trabajo-1-1.png'
            className='w-[600px] lg:w-[400px] mt-20 lg:mt-0 hidden sm:inline-block  '
            alt=''
          />
          <img
            src='/Logo_Mesa de trabajo_color.svg'
            className='   w-[250px] lg:w-[300px] h-[300px] bottom-0 '
            alt=''
          />
        </figure>
        <figure>
          <img src='/Logo_Mesa de trabajo_color.svg' alt='' />
        </figure>
      </section>
      <section className='w-full lg:w-1/5 bg-[#5B5B5B] ]'></section>
      <section className='w-full lg:w-4/6 bg-[#CECECE]  flex flex-col justify-center items-center p-20 relative gap-10'>
        <article className='border border-[#5B5B5B] p-5 relative'>
          <h1 className='text-5xl text-blue-400 w-full text-start'>Sobre mi</h1>
          <p className='mt-3 text-justify text-xl'>
            Soy Santiago Quintero, Desarrollador front-end y Diseñador visual
            apasionado por el mundo de la técnología, el diseño y la
            programación. <br />
            <br />
            Busco mantenerme siempre actualizado a través de articulos, videos y
            constante aprendizaje por medio de plataformas digitales.
            <br />
            <br />
            Mi mayor enfoque es el cumplimiento de tiempos de entrega con
            estandares de calidad elevados, que permitan una escalabilidad mayor
            a cualquier proyecto en el que me encuentre involucrado, siguiendo a
            detalle los lineamientos establecidos por el equipo sin dejar de
            lado el aporte de nuevas ideas que pudiesen mejorar en cualquier
            aspecto el trabajo del mismo.
          </p>
        </article>
        <article className='border border-[#5B5B5B] p-5 w-full relative'>
          <h2 className=' text-5xl text-blue-400 w-[99%] text-start flex justify-between items-center   '>
            {!isScrolled ? 'Estudios principales' : 'Estudios Complementarios'}
            <button
              onClick={handleScroll}
              className={`${
                isScrolled ? 'rotate-180' : 'rotate-0'
              } transition-rotate duration-500 `}
            >
              <IconContext.Provider
                value={{
                  className:
                    'text-gray-500 w-[40px] h-[40px] cursor-pointer hover:text-red-400 transition duration-[200ms] ease-in-out hover:scale-125 '
                }}
              >
                <BsArrowRightCircleFill />
              </IconContext.Provider>
            </button>
          </h2>
          <div
            className=' flex overflow-x-hidden sm:overflow-y-hidden w-full items-center scroll-smooth   mt-5 relative '
            ref={scroll}
          >
            <div className=' w-[100%]  shrink-0  flex  items-center justify-start   relative '>
              <ul className='w-full flex flex-col gap-3 '>
                {principalStudies.map((studie) => (
                  <li
                    key={studie.studie}
                    className='w-full flex gap-1 justify-between flex-col'
                  >
                    <div className='w-[70%] flex flex-col justify-between '>
                      <strong className='text-xl'>{studie.studie}</strong>
                      <span>{studie.state}</span>
                    </div>
                    <span>{studie.school}</span>
                  </li>
                ))}
              </ul>
              .
            </div>
            <div className=' w-[100%] shrink-0 '>
              <ol className='flex justify-between items-center w-full '>
                {imgLogos.map((logo, index) => (
                  <li key={index}>
                    <img
                      src={logo}
                      alt=''
                      className='w-[80px] h-[80px] shrink-0'
                    />
                  </li>
                ))}
              </ol>
              <div className='border border-gray-600 ml-2 p-5 mt-5'>
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
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { AboutMe }
