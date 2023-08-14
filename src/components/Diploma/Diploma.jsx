import React, { useContext } from 'react'
import { MyContext } from '../../context/MyContext/MyContext'

function Diploma ({ setShowDiploma }) {
  const { srcDiploma, setSrcDiploma } = useContext(MyContext)

  return (
    <div className='w-full h-[90vh]   bottom-0  left-0 flex justify-center items-center fixed'>
      <div className='w-full h-full bg-gray-500/30 blur-sm  z-0 '></div>
      <button
        className='w-[60px] text-8xl p-4'
        onClick={() => {
          setShowDiploma(false)
          setSrcDiploma('')
        }}
      >
        x
      </button>
      <img
        src={srcDiploma}
        alt='diploma'
        className='object-contain h-full z-50 absolute'
      />
    </div>
  )
}

export { Diploma }
