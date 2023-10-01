import React from 'react'
import { Description } from '../../components/Description/Description'
import { Studies } from '../../components/Studies/Studies'
import './AboutMe.css'

function AboutMe () {
  return (
    <div className='min-h-[100vh] w-full flex flex-col lg:flex-row  relative animate-fade-in-pages lg:max-h-[100vh] '>
      <section className='w-full lg:w-3/12 bg-[#eefaff]  flex  relative lg:h-[100vh] '>
        <div className='flex flex-col items-center justify-center w-full'>
          <img
            src='https://i.ibb.co/jy2WR8B/yo-1-1.jpg'
            className='min-w-[100px] w-[100%] max-w-[600px] lg:max-w-[800px] mt-20 lg:mt-0  sm:inline-block object-cover h-[500px] lg:h-full object-bottom '
            alt=''
          />
        </div>
        <figure>
          <img src='/Logo_Mesa de trabajo_color.svg' alt='' />
        </figure>
      </section>
      <section className=' lg:w-2/12 bg-[#8a8a8a]   flex justify-center items-center relative'>
        <h1 className=' text-[#CECECE] text-7xl font-OleoBold min-w-[320px] xl:text-[8rem] 2xl:min-w-[600px] w-full  lg:-rotate-90 grid place-content-center'>
          Sobre mí
        </h1>
      </section>
      <section className='lg:w-7/12   bg-[#f8fdff]  flex flex-col justify-center items-start p-20 relative  lg:h-[100vh]'>
        <Description />
        <Studies />
      </section>
    </div>
  )
}

export { AboutMe }
