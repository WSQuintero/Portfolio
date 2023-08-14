import React, { createContext, useEffect, useState } from 'react'

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
  const [initialAnimate, setInitialAnimate] = useState(false)
  const [showDiploma, setShowDiploma] = useState(false)
  const [srcDiploma, setSrcDiploma] = useState('')
  useEffect(() => {
    setTimeout(() => {
      setInitialAnimate(true)
    }, 2000)
  }, [])

  return (
    <MyContext.Provider
      value={{
        movilSize,
        setMovilSize,
        listeningResize,
        isBurguerMenuActive,
        setIsBurguerMenuActive,
        initialAnimate,
        showDiploma,
        setShowDiploma,
        srcDiploma,
        setSrcDiploma
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export { ContextProvider, MyContext }
