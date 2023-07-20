import React, { useEffect, useState } from 'react'
import { ContactIconsTwo } from '../../components/ContactIconsTwo/ContactIconsTwo'
import { useForm, ValidationError } from '@formspree/react'
import Confetti from 'react-confetti'

function Contact () {
  const [state, handleSubmit] = useForm('mpzgwdnw')
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (state.succeeded) {
      setShowConfetti(true)
      setTimeout(() => {
        setShowConfetti(false)
      }, 10000)
    }
  }, [state.succeeded])

  return (
    <div className='h-[100vh] pt-[60px] bg-[#CECECE] flex justify-center items-center flex-col'>
      {!state.succeeded
        ? (
        <>
          <h1 className='text-6xl text-[#5B5B5B] mb-12'>Contacto</h1>
          <form
            action='https://formspree.io/f/mpzgwdnw'
            method='POST'
            onSubmit={handleSubmit}
            className='flex flex-col gap-10 min-w-[300px]  w-[60%] max-w-[600px] max-h-[300px] justify-center items-center mb-10 p-5'
          >
            <input
              type='text'
              className='text-lg w-full p-4'
              placeholder='Nombre'
              name='name'
              id='name'
            />
            <ValidationError prefix='Name' field='name' errors={state.errors} />
            <div className='flex justify-between  relative w-full'>
              <input
                type='email'
                className='text-lg w-[60%] p-4'
                placeholder='Correo electrónico'
                name='email'
                id='email'
              />
              <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
              />
              <input
                type='text'
                className='text-lg w-[30%] p-4'
                placeholder='telefono'
                name='tel'
              />
              <ValidationError prefix='Tel' field='tel' errors={state.errors} />
            </div>
            <textarea
              className='text-lg  h-[150px] p-4 w-full'
              placeholder='Deja tu mensaje aquí'
              name='message'
              id='message'
            />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
            <button
              className='w-[200px] h-[80px] inline p-4 bg-[#5B5B5B] text-[#CECECE] text-2xl'
              disabled={state.submitting}
            >
              Enviar
            </button>
          </form>
          <ContactIconsTwo />{' '}
        </>
          )
        : (
        <>
          <p className='text-blue-400 text-4xl w-[400px] text-center'>
            Has enviado tu información correctamente, ¡muchas gracias!
          </p>
          <div className='fixed bottom-0 left-0 w-full h-[calc(100vh-60px)] z-50'>
            {showConfetti && <Confetti />}
          </div>
        </>
          )}
    </div>
  )
}

export { Contact }
