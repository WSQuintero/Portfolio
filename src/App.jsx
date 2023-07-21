import React from 'react'
import { AppRoutes } from './Routes/AppRoutes'
import { NavBar } from './components/NavBar/NavBar'
import './App.css'

function App () {
  return (
    <>
      <header className='flex flex-col sm:flex-row justify-center sm:justify-between items-center bg-[#686868] min-h-[60px] w-full sm:h-[60px] z-10 header fixed font-righteous gap-10'>
        <NavBar />
      </header>
      <main className='font-righteous h-full'>
        <AppRoutes />
      </main>
      <footer></footer>
    </>
  )
}

export default App
