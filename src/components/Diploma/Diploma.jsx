import React from 'react'

function Diploma ({ diploma, setShowDiploma }) {
  return (
    <div className='w-full h-[90vh] bg-red-400  bottom-0 fixed left-0'>
      <button className='w-[60px] text-8xl p-4' onClick={() => setShowDiploma(false)}>
        x
      </button>
      <img src={diploma} alt='' />
    </div>
  )
}

export { Diploma }
