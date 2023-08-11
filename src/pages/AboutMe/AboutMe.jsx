import React from 'react'
import { Description } from '../../components/Description/Description'
import { Studies } from '../../components/Studies/Studies'
import './AboutMe.css'

function AboutMe () {
  return (
    <div className='min-h-[100vh] w-full flex flex-col lg:flex-row  relative animate-fade-in-pages'>
      <section className='w-full lg:w-2/4 bg-[#eefaff]  flex  relative lg:h-[100vh] '>
        <div className='flex flex-col items-center justify-center w-full'>
          <img
            src='https://i.ibb.co/zsV8sCM/Vectorizaci-n-composici-n-Mesa-de-trabajo-1-1.png'
            className='min-w-[100px] w-[100%] max-w-[600px] lg:max-w-[800px] mt-20 lg:mt-0  sm:inline-block '
            alt=''
          />
        </div>
        <figure>
          <img src='/Logo_Mesa de trabajo_color.svg' alt='' />
        </figure>
      </section>
      <section className=' lg:w-1/5 bg-[#8a8a8a]   flex justify-center items-center relative'>
        <h1 className=' text-[#CECECE] text-7xl font-Akira min-w-[320px] 2xl:text-9xl 2xl:min-w-[600px] w-full  lg:-rotate-90 grid place-content-center'>
          Sobre mi
        </h1>
      </section>
      <section className='lg:w-[53vw]  bg-[#d3d3d3]  flex flex-col justify-center items-center p-20 relative '>
        <Description />
        <Studies />
      </section>
    </div>
  )
}

export { AboutMe }
