import React from 'react'

function SeeRepositories ({ repo, link }) {
  return (
    <div className='flex gap-3 mt-6 '>
      <a href={repo} target='_blank' rel='noreferrer'>
        <button className=' sm:w-auto w-auto bg-[#ff5858] p-3 rounded-lg z-20 text-[#FFF] 2xl:w-[400px] 2xl:text-4xl sm:text-2xl hover:bg-red-300 hover:text-gray-200 font-bold'>
          Ver repositorio
        </button>
      </a>
      <a href={link} target='_blank' rel='noreferrer'>
        <button className='w-[100px] sm:w-auto bg-[#6eadff]  p-3 rounded-lg z-20 text-[#FFF] 2xl:w-[400px]  sm:text-2xl 2xl:text-4xl hover:bg-blue-300 hover:text-gray-200  font-bold'>
          Visitar sitio web
        </button>
      </a>
    </div>
  )
}

export { SeeRepositories }
