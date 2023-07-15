import React, { createContext, useState } from 'react'

const MyContext = createContext()

function ContextProvider ({ children }) {
  const [movilSize, setMovilSize] = useState(window.innerWidth < 1040)

  const listeningResize = () => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1040) {
        setMovilSize(true)
      } else {
        setMovilSize(false)
      }
    })
  }

  return (
    <MyContext.Provider value={{ movilSize, setMovilSize, listeningResize }}>
      {children}
    </MyContext.Provider>
  )
}

export { ContextProvider, MyContext }
