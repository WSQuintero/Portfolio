import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { MyContext } from '../../context/MyContext/MyContext'

function Home () {
  const navigate = useNavigate()
  const { movilSize } = useContext(MyContext)

  return (
    <div className='flex flex-col sm:flex-row justify-center items-center h-[calc(100vh)] w-full z-0'>
      <section className='w-full sm:w-[50%] bg-[#f1f1f1] h-full flex justify-center items-center  relative  py-[50px] '>
        {!movilSize && (
          <figure
            className=' left-8  flex justify-center items-center absolute top-[40px] z-20 '
            onClick={() => navigate('/about-me')}
          >
            <img
              src={'/Logo_Mesa de trabajo_color.svg'}
              alt='logo'
              className={'w-[300px] relative cursor-pointer mt-20 filter '}
            />
          </figure>
        )}
      </section>
      <section
        className='w-full sm:w-[50%] bg-[#e7f0fc] h-full flex flex-col justi
      fy-center items-center sm:justify-end sm:items-end sm:pr-20 pb-20 gap-3 z-0 overflow-hidden'
      >
        <h1 className='flex items-center text-center  sm:text-end text-6xl text-darkBlue  z-20   lg:justify-end font-bold'>
          Desarrollador Front end
        </h1>
        <h2 className=' text-3xl text-[#aaaaaa] font-bold'>Diseñador visual</h2>
        <div className='flex gap-5 mt-20 sm:mt-0 flex-col '>
          <button
            className='w-[200px] bg-gray-200 p-3 rounded-lg z-20 text-[#5B5B5B] border border-[#08273C] text-xl hover:bg-red-400 hover:text-gray-200 font-bold'
            onClick={() => navigate('/projects')}
          >
            Projectos
          </button>
          <button
            className='w-[200px] bg-gray-200 p-3 rounded-lg z-20 text-[#5B5B5B]  border text-xl border-[#08273C] hover:bg-blue-400 hover:text-gray-200  font-bold'
            onClick={() => navigate('/about-me')}
          >
            Sobre mi
          </button>
        </div>
      </section>
      <figure className=' w-[70%] max-w-[260px] sm:max-w-[350px] absolute overflow-hidden flex justify-center items-center top-[100px] sm:top-auto  z-0'>
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
