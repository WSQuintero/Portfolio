import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { MyContext } from '../../context/MyContext/MyContext'

function Home () {
  const navigate = useNavigate()
  const { movilSize } = useContext(MyContext)

  return (
    <div className='flex flex-col sm:flex-row justify-center items-center h-[calc(100vh-79px)] w-[100vw] '>
      <div className='w-full sm:w-[50vw] bg-gray-100 h-full flex justify-center items-center relative'>
        {!movilSize && (
          <figure className='w-1/4  left-40 mb-40 bg-green-200 h-2/4 absolute'></figure>
        )}
      </div>
      <div className='w-full sm:w-[50vw] bg-gray-600 h-full flex flex-col justify-center items-center sm:justify-end sm:items-end sm:pr-20 pb-20 gap-3 '>
        <h1 className='w-3/4 bg-gray-100 h-16 flex items-center justify-end text-5xl mt-20'>
          Desarrollador Front end
        </h1>
        <h2>Diseñador visual</h2>
        <button
          className='w-[150px] bg-gray-200 p-3 rounded-lg'
          onClick={() => navigate('/projects')}
        >
          Projects
        </button>
        <button
          className='w-[150px] bg-gray-200 p-3 rounded-lg '
          onClick={() => navigate('/about-me')}
        >
          About me
        </button>
      </div>
      <figure className='w-2/4 sm:w-1/4 absolute bg-red-400 h-2/5 mb-60 sm:mb-40'></figure>
    </div>
  )
}

export { Home }
