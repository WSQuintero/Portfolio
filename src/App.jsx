import React from 'react'
import './App.css'
import { AppRoutes } from './Routes/AppRoutes'
import { NavBar } from './components/NavBar/NavBar'

function App () {
  return (
    <>
      <header className='flex justify-between items-center bg-gray-400 p-7 w-[100vw]'>
        <NavBar />
      </header>
      <main>
        <AppRoutes />
      </main>
      <footer></footer>
    </>
  )
}

export default App
