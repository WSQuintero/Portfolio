import React from 'react'
import { AppRoutes } from './Routes/AppRoutes'
import { NavBar } from './components/NavBar/NavBar'
import './App.css'

function App () {
  return (
    <>
      <header className='flex justify-between items-center bg-gray-500  w-full h-[60px] z-10'>
        <NavBar />
      </header>
      <main className='z-0'>
        <AppRoutes />
      </main>
      <footer></footer>
    </>
  )
}

export default App
