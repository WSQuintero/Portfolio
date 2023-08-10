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
    <div className='h-full flex flex-col sm:flex-row gap-3 bg-[#8a8a8a] animate-fade-in-pages '>
      <aside className='w-full sm:w-1/6 bg-[#696969] h-[200px] sm:min-h-[100vh] mt-[60px] sm:mt-0 flex justify-center items-center'>
        <h1 className='sm:-rotate-90 text-6xl sm:text-8xl text-[#CECECE]/50  font-Akira mt-20'>
          Proyectos
        </h1>
      </aside>
      <section
        className={
          'w-full sm:w-5/6 bg-[#8a8a8a] min-h-[100vh] flex flex-col sm:grid  sm:grid-cols-2 sm:pt-[60px] gap-3 '
        }
      >
        {projects.map((project) => (
          <article
            key={project.project}
            className='bg-gray-600 w-full  sm:w-[1fr]  relative flex justify-center items-center rounded-3xl'
            onMouseEnter={() => handleMouseEnter(project.project)} // Usar la función con el nombre del proyecto
            onMouseLeave={() => handleMouseLeave(project.project)}
          >
            <div className='z-0 w-full h-full'>
              <img
                src={project.img}
                alt={project.project}
                className='h-[100%] object-cover rounded-3xl  '
              />
            </div>
            {hoverState[project.project] && (
              <div className='bg-[#e7f0fc]/80 flex flex-col justify-center items-center w-full h-full  rounded-3xl sm:h-full absolute top-0 z-10'>
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
