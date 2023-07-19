import React from 'react'
import { projects } from '../../DB/projects'

function Projects () {
  return (
    <div className='h-full flex flex-col sm:flex-row'>
      <aside className='w-full sm:w-1/4 bg-[#5B5B5B] h-[200px] sm:min-h-[100vh] mt-[60px] sm:mt-0'></aside>
      <section
        className={'w-full sm:w-3/4 bg-[#CECECE] min-h-[100vh] flex flex-col sm:grid  sm:grid-cols-2 sm:pt-[60px]'}
      >
        {projects.map((project) => (
          <article
            key={project.project}
            className='bg-gray-600 w-full h-[300px] sm:w-[1fr] sm:h-full hover:bg-[#CECECE]'
          >
            <img src={project.img} alt='' />
            <p>{project.project}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export { Projects }
