import React from 'react'
import './etiqueta.css'

const Etiqueta = ( {texto, colorFondo, colortxt, tamanotxt} ) => {

    const tamanoTexto = {
        pequeno: "1rem",
        mediano: "1.25rem",
        grande:  "1.75rem",
    }

  return (
    <div className="etiketa"
        style= {{
            backgroundColor:colorFondo,
            color:colortxt,
            fontSize:tamanoTexto[tamanotxt],
        }}

        >
        <p>{texto}</p>
        
    </div>
  )
}

export default Etiqueta
