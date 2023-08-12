import React from 'react'
import { useRoutes } from 'react-router'
import { Home } from '../pages/Home/Home'
import { AboutMe } from '../pages/AboutMe/AboutMe'
import { Projects } from '../pages/Projects/Projects'
import { Contact } from '../pages/Contact/Contact'
import { Diplomas } from '../pages/Diplomas/Diplomas'

function AppRoutes () {
  const routes = useRoutes([
    { path: '/', element: <Home />, exact: true },
    { path: '/about-me', element: <AboutMe />, exact: true },
    { path: '/projects', element: <Projects />, exact: true },
    { path: '/contact', element: <Contact />, exact: true },
    { path: '/diplomas', element: <Diplomas />, exact: true }
  ])
  return routes
}

export { AppRoutes }
