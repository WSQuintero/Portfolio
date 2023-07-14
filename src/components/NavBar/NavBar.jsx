import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { MyContext } from '../../context/MyContext/MyContext'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IconContext } from 'react-icons'

function NavBar () {
  return (
    <>
    <img src="/navLogo_Mesa de trabajo 1_Mesa de trabajo 1.svg" alt="" className='w-[20%]' />
      <nav></nav>
    </>
  )
}

export { NavBar }
