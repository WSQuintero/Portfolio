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
            className='w-[600px] lg:w-[400px] mt-20 lg:mt-0 hidden sm:inline-block  '
            alt=''
          />
          <img
            src='/Logo_Mesa de trabajo_color.svg'
            className='   w-[250px] lg:w-[300px] h-[300px] bottom-0 '
            alt=''
          />
        </div>
        <figure>
          <img src='/Logo_Mesa de trabajo_color.svg' alt='' />
        </figure>
      </section>
      <section className='w-full lg:w-1/5 bg-[#193141]'></section>
      <section className='w-full lg:w-4/6 bg-[#ffffff]  flex flex-col justify-center items-center p-20 relative gap-10 '>
        <Description />
        <Studies />
      </section>
    </div>
  )
}

export { AboutMe }
