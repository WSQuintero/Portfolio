import React from 'react'

function Description () {
  return (
    <article className='border border-[#5B5B5B] p-5 relative'>
      <h1 className='text-5xl text-blue-400 w-full text-start'>Sobre mi</h1>
      <p className='mt-3 text-justify text-xl'>
        Soy Santiago Quintero, Desarrollador front-end y Diseñador visual
        apasionado por el mundo de la técnología, el diseño y la programación.{' '}
        <br />
        <br />
        Mi principal enfoque se basa en lograr estandares de calidad elevados en
        el código realizado, que permita una escalabilidad mayor a cualquier
        proyecto en el que me encuentre involucrado, siguiendo a detalle los
        lineamientos establecidos por el equipo sin dejar de lado el aporte de
        nuevas ideas, que pudiesen mejorar en cualquier aspecto el trabajo del
        mismo.
      </p>
    </article>
  )
}

export { Description }
