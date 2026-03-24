import React from 'react'

const Asistente = ({nombre, tarea, emoji}) => {
  return (
    <li>
      <h3>{nombre}</h3>
      <p>{tarea} {emoji}</p>
    </li>
  )
}

export default Asistente
