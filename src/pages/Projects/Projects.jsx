import React, { useState } from 'react'
import { projects } from '../../DB/projects'

function Projects () {
  const [hoverState, setHoverState] = useState({})

  const handleMouseEnter = (project) => {
    setHoverState((prevState) => ({
      ...prevState,
      [project]: true
    }))
  }

  const handleMouseLeave = (project) => {
    setHoverState((prevState) => ({
      ...prevState,
      [project]: false
    }))
  }

  return (
    <div className='h-full flex flex-col sm:flex-row'>
      <aside className='w-full sm:w-1/4 bg-[#5B5B5B] h-[200px] sm:min-h-[100vh] mt-[60px] sm:mt-0 flex justify-center items-center'>
        <h1 className='sm:-rotate-90 text-9xl text-[#CECECE]'>Projectos</h1>
      </aside>
      <section
        className={
          'w-full sm:w-3/4 bg-[#CECECE] min-h-[100vh] flex flex-col sm:grid  sm:grid-cols-2 sm:pt-[60px]'
        }
      >
        {projects.map((project) => (
          <article
            key={project.project}
            className='bg-gray-600 w-full  sm:w-[1fr] sm:h-full relative flex justify-center items-center'
            onMouseEnter={() => handleMouseEnter(project.project)} // Usar la función con el nombre del proyecto
            onMouseLeave={() => handleMouseLeave(project.project)}
          >
            <div className='z-0 w-full'>
              <img src={project.img} alt={project.project} className='w-full '/>
              <p className='text-center text-3xl text-[#CECECE]  w-full bg-[#5B5B5B] '>{project.project}</p>
            </div>
            {hoverState[project.project] && (
              <div className='bg-gray-200 w-full h-[300px] sm:w-[1fr] sm:h-full absolute top-0 z-10'></div>
            )}
          </article>
        ))}
      </section>
    </div>
  )
}

export { Projects }
