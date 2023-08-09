import React from 'react'
import { Description } from '../../components/Description/Description'
import { Studies } from '../../components/Studies/Studies'
import './AbotMe.css'

function AboutMe () {
  return (
    <div className='min-h-[100vh] w-full flex flex-col lg:flex-row pt-20 relative'>
      <section className='w-full lg:w-2/4 bg-[#eefaff]  flex  relative '>
        <div className='flex flex-col items-center justify-center w-full'>
          <img
            src='https://i.ibb.co/zsV8sCM/Vectorizaci-n-composici-n-Mesa-de-trabajo-1-1.png'
            className='min-w-[100px] w-[100%] max-w-[600px] lg:max-w-[800px] mt-20 lg:mt-0  sm:inline-block '
            alt=''
          />
          {/* <img
            src='/Logo_Mesa de trabajo_color.svg'
            className='   w-[250px] lg:w-[300px] h-[300px] bottom-0 sm:hidden lg:inline-block'
            alt=''
          /> */}
        </div>
        <figure>
          <img src='/Logo_Mesa de trabajo_color.svg' alt='' />
        </figure>
      </section>
      <section className=' lg:w-1/5 bg-[#193141]   flex justify-center items-center relative'>
        <h1 className=' text-[#CECECE] text-7xl font-Akira min-w-[320px] 2xl:text-9xl 2xl:min-w-[600px] w-full  lg:-rotate-90 grid place-content-center'>
          Sobre mi
        </h1>
      </section>
      <section className='lg:w-[53vw]  bg-[#ffffff]  flex flex-col justify-center items-center p-20 relative gap-10 '>
        <Description />
        <Studies />
      </section>
    </div>
  )
}

export { AboutMe }
