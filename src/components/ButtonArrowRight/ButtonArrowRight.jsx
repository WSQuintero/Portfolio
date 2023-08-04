import React from 'react'
import { IconContext } from 'react-icons'
import { BsArrowRightCircleFill } from 'react-icons/bs'

function ButtonArrowRight ({ handleScroll, isScrolled }) {
  return (
    <button
      onClick={handleScroll}
      className={`${
        isScrolled ? 'rotate-180' : 'rotate-0'
      } transition-rotate duration-500 `}
    >
      <IconContext.Provider
        value={{
          className:
            'text-gray-500 w-[40px] h-[40px] cursor-pointer hover:text-red-400 transition duration-[200ms] ease-in-out hover:scale-125 '
        }}
      >
        <BsArrowRightCircleFill />
      </IconContext.Provider>
    </button>
  )
}

export { ButtonArrowRight }
