import React, { createContext, useState } from 'react'

const MyContext = createContext()

function ContextProvider ({ children }) {
  const [movilSize, setMovilSize] = useState(window.innerWidth < 640)
  const [isBurguerMenuActive, setIsBurguerMenuActive] = useState(false)

  const listeningResize = () => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 640) {
        setMovilSize(true)
      } else {
        setMovilSize(false)
        setIsBurguerMenuActive(false)
      }
    })
  }

  return (
    <MyContext.Provider
      value={{
        movilSize,
        setMovilSize,
        listeningResize,
        isBurguerMenuActive,
        setIsBurguerMenuActive
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export { ContextProvider, MyContext }
