import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { MyContext } from '../../context/MyContext/MyContext'

function Home () {
  const [changeLogo, setChangeLogo] = useState(false)
  const navigate = useNavigate()
  const { movilSize } = useContext(MyContext)

  return (
    <div className='flex flex-col sm:flex-row justify-center items-center h-[calc(100vh)] w-full z-0'>
      <div className='w-full sm:w-[50%] bg-[#CECECE] h-full flex justify-center items-center  relative  py-[50px] '>
        {!movilSize && (
          <figure
            className=' left-8  flex justify-center items-center absolute top-[40px] z-20 '
            onMouseEnter={() => setChangeLogo(true)}
            onMouseLeave={() => setChangeLogo(false)}
            onClick={() => navigate('/about-me')}
          >
            <img
              src={
                !changeLogo
                  ? '/Logo_Mesa de trabajo.svg'
                  : '/Logo_Mesa de trabajo_color.svg'
              }
              alt=''
              className={`w-[300px] relative cursor-pointer ${
                !changeLogo && 'opacity-20'
              }`}
            />
          </figure>
        )}
      </div>
      <div className='w-full sm:w-[50%] bg-[#5B5B5B] h-full flex flex-col justify-center items-center sm:justify-end sm:items-end sm:pr-20 pb-20 gap-3 z-0'>
        <h1 className='flex items-center text-center w-[250px] sm:w-[334px] sm:text-end text-6xl text-[#CECECE] z-20 min-w-[200px] lg:w-full lg:justify-end'>
          Desarrollador Front end
        </h1>
        <h2 className='font-righteous text-3xl text-[#aaaaaa] '>
          Diseñador visual
        </h2>
        <div className='flex gap-5 mt-20 sm:mt-0 flex-col'>

        <button
          className='w-[200px] bg-gray-200 p-3 rounded-lg z-20 text-[#5B5B5B]  text-xl hover:bg-red-400 hover:text-gray-200'
          onClick={() => navigate('/projects')}
        >
          Projects
        </button>
        <button
          className='w-[200px] bg-gray-200 p-3 rounded-lg z-10 text-[#5B5B5B]  text-xl hover:bg-blue-400 hover:text-gray-200 '
          onClick={() => navigate('/about-me')}
        >
          About me
        </button>
        </div>
      </div>
      <figure className=' min-w-[250px] max-w-[800px] absolute overflow-hidden flex justify-center items-center top-40 z-0'>
        <img
          src='https://i.ibb.co/tJgCrCP/rostro-editado-1-1.png'
          alt='rostro-editado-1-1'
          border='0'
          className='min-w-[200px] h-[20%] z-0 '
        />
      </figure>
    </div>
  )
}

export { Home }
