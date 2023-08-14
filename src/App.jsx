import React, { useContext } from 'react'
import { AppRoutes } from './Routes/AppRoutes'
import { NavBar } from './components/NavBar/NavBar'
import { MyContext } from './context/MyContext/MyContext'
import { InitialAnimate } from './components/InitialAnimate/InitialAnimate'
import './App.css'
import { Diploma } from './components/Diploma/Diploma'

function App () {
  const { initialAnimate, showDiploma, setShowDiploma } = useContext(MyContext)

  return (
    <>
      {!initialAnimate
        ? (
        <InitialAnimate />
          )
        : (
        <>
          <header className='flex flex-col sm:flex-row justify-center sm:justify-between items-center bg-darkBlue/10 min-h-[60px] w-full sm:h-[60px] z-10 header fixed font-righteous gap-10 overflow-x-hidden'>
            <NavBar />
          </header>
          <main className='font-righteous h-[100vh] w-full sm:overflow-hidden'>
            <AppRoutes />
            {showDiploma && (
              <Diploma
                setShowDiploma={setShowDiploma}
              />
            )}
          </main>
          <footer></footer>
        </>
          )}
    </>
  )
}

export default App
