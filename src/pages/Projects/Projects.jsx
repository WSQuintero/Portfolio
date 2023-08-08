import React, { useState } from 'react'
import { projects } from '../../DB/projects'
import { SeeRepositories } from '../../components/SeeRepositories/SeeRepositories'

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
      <aside className='w-full sm:w-1/5 bg-[#08273C] h-[200px] sm:min-h-[100vh] mt-[60px] sm:mt-0 flex justify-center items-center'>
        <h1 className='sm:-rotate-90 text-9xl text-[#CECECE]'>Proyectos</h1>
      </aside>
      <section
        className={
          'w-full sm:w-4/5 bg-[#CECECE] min-h-[100vh] flex flex-col sm:grid  sm:grid-cols-2 sm:pt-[60px]'
        }
      >
        {projects.map((project) => (
          <article
            key={project.project}
            className='bg-gray-600 w-full  sm:w-[1fr]  relative flex justify-center items-center'
            onMouseEnter={() => handleMouseEnter(project.project)} // Usar la función con el nombre del proyecto
            onMouseLeave={() => handleMouseLeave(project.project)}
          >
            <div className='z-0 w-full'>
              <img
                src={project.img}
                alt={project.project}
                className='h-[60%] '
              />
              <p className='text-center text-3xl text-[#CECECE]  w-full bg-[#5B5B5B] '>
                {project.project}
              </p>
            </div>
            {hoverState[project.project] && (
              <div className='bg-[#e7f0fc]/80 flex flex-col justify-center items-center w-full h-[300px] sm:w-[1fr] sm:h-full absolute top-0 z-10'>
                <h3 className='text-[#08273C] font-bold text-5xl'>
                  {project.project}
                </h3>
                <p className='text-[#08273C] text-xl'>{project.description}</p>
                <SeeRepositories repo={project.repo} link={project.link} />
              </div>
            )}
          </article>
        ))}
      </section>
    </div>
  )
}

export { Projects }
