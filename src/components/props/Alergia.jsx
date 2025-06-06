import React from 'react'

const Alergia = ({tipo, sintoma, control}) => {
  return (
    <div className="tarjeta__alergia">
        <h4>Descripcion de Alergia</h4>
            <p>Tipo de alergia: {tipo}</p>
            <p>Síntoma presentado: {sintoma}</p>
            <p>Tratamiento recibido: {control}</p>      
    </div>
  )
}

export default Alergia
