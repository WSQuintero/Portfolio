import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { MyContext } from '../../context/MyContext/MyContext'
import './Home.css'

function Home () {
  const navigate = useNavigate()
  const { movilSize } = useContext(MyContext)

  return (
    <div className='flex flex-col sm:flex-row justify-center items-center h-[calc(100vh)] w-full z-0'>
      <section className='w-full sm:w-[50%] bg-[#8a8a8a] h-full flex justify-center items-center  relative  py-[50px] '>
        {!movilSize && (
          <figure className=' w-[60%] sm:max-w-[350px] lg:max-w-[700px] flex justify-center items-center absolute left-20 top-40 lg:top-auto '>
            <img
              src={'/Logo_Mesa de trabajo.svg'}
              alt='logo'
              className={'w-[100%] relative cursor-pointer opacity-70  '}
              onClick={() => navigate('/about-me')}
            />
          </figure>
        )}
      </section>
      <section className='w-full sm:w-[50%] bg-[#eefaff] h-full flex flex-col justify-center items-center sm:justify-end sm:items-end sm:pr-20 pb-20 gap-3 z-0 overflow-hidden'>
        <h1 className='flex items-center text-center   sm:text-end text-6xl 2xl:text-8xl text-[#4e4e4e]  z-20   lg:justify-end font-bold p-5 sm:p-0'>
          Desarrollador Front end
        </h1>
        <h2 className=' text-5xl text-[#8a8a8a] font-bold 2xl:text-8xl'>
          Diseñador visual
        </h2>
        <div className='flex gap-5 mt-20 sm:mt-0 flex-col '>
          <button
            className='w-[200px] bg-[#ff5858] p-3 rounded-lg z-20 text-[#FFF] 2xl:w-[400px] 2xl:text-4xl text-2xl hover:bg-red-300 hover:text-gray-200 font-bold'
            onClick={() => navigate('/projects')}
          >
            Projectos
          </button>
          <button
            className='w-[200px] bg-[#6eadff]  p-3 rounded-lg z-20 text-[#FFF] 2xl:w-[400px]  text-2xl 2xl:text-4xl hover:bg-blue-300 hover:text-gray-200  font-bold'
            onClick={() => navigate('/about-me')}
          >
            Sobre mí
          </button>
        </div>
      </section>
      <figure className=' min-w-[200px] w-[70%] max-w-[400px] sm:max-w-[350px] 2xl:max-w-[500px] absolute overflow-hidden flex justify-center items-center top-[100px] sm:top-auto  z-0 animate-fade-in-img '>
        <img
          src='https://i.ibb.co/02bGyjD/rostro-editado-final-1-1.png> '
          alt='rostro-editado-final'
          border='0'
          className=' w-full h-full object-cover '
        />
      </figure>
    </div>
  )
}

export { Home }
