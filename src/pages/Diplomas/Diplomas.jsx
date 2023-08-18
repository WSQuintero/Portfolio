import React, { useContext } from 'react'
import { diplomaPlatzi } from '../../DB/imgDiplomas'
import { Diploma } from '../../components/Diploma/Diploma'
import './Diplomas.css'
import { MyContext } from '../../context/MyContext/MyContext'

function Diplomas () {
  const { setShowDiploma, showDiploma, setSrcDiploma } = useContext(MyContext)

  return (
    <div className='container-dip'>
      {diplomaPlatzi.map((img) => (
        <img
          src={img}
          key={img}
          className='img-dip'
          onClick={() => {
            setSrcDiploma(img)
            setShowDiploma(true)
          }}
        ></img>
      ))}
      {showDiploma && <Diploma />}
    </div>
  )
}

export { Diplomas }
