import React, { createContext } from 'react'

const MyContext = createContext()

function ContextProvider ({ children }) {
  return <MyContext.Provider value={''}>{children}</MyContext.Provider>
}

export { ContextProvider, MyContext }
