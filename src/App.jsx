import React from 'react'
import { AppRoutes } from './Routes/AppRoutes'
import { NavBar } from './components/NavBar/NavBar'
import './App.css'

function App () {
  return (
    <>
      <header className='flex justify-between items-center bg-[#686868]  w-full h-[60px] z-10 header absolute font-righteous '>
        <NavBar />
      </header>
      <main className='font-righteous '>
        <AppRoutes />
      </main>
      <footer></footer>
    </>
  )
}

export default App
