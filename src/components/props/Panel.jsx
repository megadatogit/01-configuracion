import React from 'react'
import './panel.css'

const Panel = ( {titulo, children} ) => {
  return (
    <div className='panel'>
        {titulo && <h3 className='panelTitulo'>{titulo}</h3>}
        {children}
    </div>
  )
}

export default Panel