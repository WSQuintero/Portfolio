import React from 'react'
import './App.css'
import { AppRoutes } from './Routes/AppRoutes'
import { NavBar } from './components/NavBar/NavBar'

function App () {
  return (
    <>
      <header>
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
