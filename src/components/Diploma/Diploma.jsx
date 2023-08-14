import React, { useContext } from 'react'
import { MyContext } from '../../context/MyContext/MyContext'
import { AiFillCloseCircle } from 'react-icons/ai'
import { IconContext } from 'react-icons'

function Diploma ({ setShowDiploma }) {
  const { srcDiploma, setSrcDiploma } = useContext(MyContext)

  return (
    <div className='w-full h-[90%]   bottom-0  left-0 flex flex-col sm:flex-row justify-center items-center fixed '>
      {/* <div className='w-full h-full bg-gray-300/70 blur-lg  z-0 absolute'></div> */}

      <div className=' w-full z-50 sm:w-1/12 h-1/5 sm:h-full flex items-center justify-center bg-gray-200/80 sm:bg-gray-200/70'>
        <button
          className='w-[60px] text-8xl   '
          onClick={() => {
            setShowDiploma(false)
            setSrcDiploma('')
          }}
        >
          <IconContext.Provider
            value={{
              className:
                'w-[60px] h-[60px] text-red-400 hover:text-green-300 font-bold'
            }}
          >
            <AiFillCloseCircle />
          </IconContext.Provider>
        </button>
      </div>
      <figure className=' z-50 w-full sm:w-11/12 sm:h-full h-4/5  flex justify-center items-center bg-gray-400/70'>
        <img
          src={srcDiploma}
          alt='diploma'
          className='object-contain h-[100%] '
        />
      </figure>
    </div>
  )
}

export { Diploma }
