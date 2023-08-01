import React from 'react'

function SeeRepositories ({ repo, link }) {
  return (
    <div className='flex gap-3'>
      <a href={repo} target='_blank' rel='noreferrer'>
        Ver repositorio
      </a>
      <a href={link} target='_blank' rel='noreferrer'>
        visitar sitio web
      </a>
    </div>
  )
}

export { SeeRepositories }
