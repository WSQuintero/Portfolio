import React from 'react'
import './SeeRepositories.css'

function SeeRepositories ({ repo, link }) {
  return (
    <div className='flex gap-3 mt-3'>
      <a href={repo} target='_blank' rel='noreferrer' className='buttons'>
        Ver repositorio
      </a>
      <a href={link} target='_blank' rel='noreferrer' className='buttons'> Visitar sitio web
      </a>
    </div>
  )
}

export { SeeRepositories }
