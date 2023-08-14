import React from 'react'
import { Description } from '../../components/Description/Description'
import { Studies } from '../../components/Studies/Studies'
import './AboutMe.css'

function AboutMe () {
  return (
    <div className='min-h-[100vh] w-full flex flex-col lg:flex-row  relative animate-fade-in-pages lg:max-h-[100vh]'>
      <section className='w-full lg:w-3/12 bg-[#eefaff]  flex  relative lg:h-[100vh] '>
        <div className='flex flex-col items-center justify-center w-full'>
          <img
            src='https://scontent.fbog3-2.fna.fbcdn.net/v/t1.6435-9/185041052_10217799352766271_1905459314631738667_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeGLe3lwQd6zUeg410LfRHw3UpdG_68I5aJSl0b_rwjlokgxuVF8CvMzHVy2A32fbx8&_nc_ohc=Lbftf7_JYUYAX-5PW2O&_nc_ht=scontent.fbog3-2.fna&oh=00_AfACNWR8sE0MpGbPGLwIwJAZU_W5lnuzUvDRwHuCoztkYw&oe=64FF30FA'
            className='min-w-[100px] w-[100%] max-w-[600px] lg:max-w-[800px] mt-20 lg:mt-0  sm:inline-block object-cover h-[500px] lg:h-full object-bottom '
            alt=''
          />
        </div>
        <figure>
          <img src='/Logo_Mesa de trabajo_color.svg' alt='' />
        </figure>
      </section>
      <section className=' lg:w-2/12 bg-[#8a8a8a]   flex justify-center items-center relative'>
        <h1 className=' text-[#CECECE] text-7xl font-Akira min-w-[320px] 2xl:text-9xl 2xl:min-w-[600px] w-full  lg:-rotate-90 grid place-content-center'>
          Sobre mí
        </h1>
      </section>
      <section className='lg:w-7/12   bg-[#f8fdff]  flex flex-col justify-center items-center p-20 relative overflow-hidden lg:h-[100vh]'>
        <Description />
        <Studies />
      </section>
    </div>
  )
}

export { AboutMe }
