import React from 'react'
import { diplomaPlatzi } from '../../DB/imgDiplomas'

function Diplomas () {
  return <div>{diplomaPlatzi.map((img) => (
    <img src={img} key={img}></img>
  ))}</div>
}

export { Diplomas }
