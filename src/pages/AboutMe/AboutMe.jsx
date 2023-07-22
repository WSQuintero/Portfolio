import React, { useRef, useState } from 'react'
import { IconContext } from 'react-icons'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { imgLogos } from '../../DB/imgLogos'

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
    <div className='h-full w-full flex flex-col lg:flex-row'>
      <section className='w-full lg:w-2/4 bg-[#CECECE] h-[100vh] flex justify-center items-center relative'>
        <figure className='flex flex-col items-center justify-center w-full'>
          <img
            src='https://i.ibb.co/zsV8sCM/Vectorizaci-n-composici-n-Mesa-de-trabajo-1-1.png'
            className='w-[400px] '
            alt=''
          />
          <img
            src='/Logo_Mesa de trabajo_color.svg'
            className=' absolute w-[300px] h-[300px] bottom-0 '
            alt=''
          />
        </figure>
        <figure>
          <img src='/Logo_Mesa de trabajo_color.svg' alt='' />
        </figure>
      </section>
      <section className='w-full lg:w-1/5 bg-[#5B5B5B] h-[200px] lg:h-[100vh] '></section>
      <section className='w-full lg:w-4/6 bg-[#CECECE] h-[100vh] flex flex-col justify-center items-center p-20 relative gap-10'>
        <article className='border border-[#5B5B5B] p-5'>
          <h1 className='text-5xl text-blue-400 w-full text-start'>Sobre mi</h1>
          <p className='mt-3 text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            asperiores pariatur quam hic sapiente tempore consequuntur, odit a?
            Animi ex praesentium eum laborum, consectetur quam? Tenetur magnam
            nobis, sit repellat cum a quasi adipisci dolores eius ipsam
            assumenda vero eos dignissimos dolorem facilis omnis consequuntur
            laboriosam minus ratione libero eum.
          </p>
        </article>
        <article className='border border-[#5B5B5B] p-5 w-full'>
          <h2 className=' text-5xl text-blue-400 w-[99%] text-start flex justify-between items-center relative  '>
            Estudios
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
            className='flex overflow-x-hidden sm:overflow-y-hidden w-full items-center scroll-smooth  sm:h-[60px] gap-3 mt-5  '
            ref={scroll}
          >
            <div className='w-[100vw] flex items-center bg-[#A3A3A3]  '>
              <div className='w-full shrink-0 text-justify'>
                <p className='p-5'>
                  {' '}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum nesciunt delectus illo quaerat voluptates atque autem
                  vero quia, odio in? Dicta enim ipsam consequatur a laboriosam,
                  corporis quaerat vitae dolorem.
                </p>
              </div>
              <div className=' w-full shrink-0 p-10'>
                <ol className='flex justify-between items-center'>
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
              </div>
            </div>
          </div>
        </article>
        <article className='border border-[#5B5B5B] p-5 w-full'>
          <h3 className='  text-5xl text-blue-400 w-full text-start'>
            Aspiraciones
          </h3>
          <p className='mt-5'>
            {' '}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            nesciunt delectus illo quaerat voluptates atque autem vero quia,
            odio in? Dicta enim ipsam consequatur a laboriosam, corporis quaerat
            vitae dolorem.
          </p>
        </article>
      </section>
    </div>
  )
}

export { AboutMe }
