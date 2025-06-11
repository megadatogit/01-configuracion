import React from 'react'
import './panel.css'

/**
 * Panel
 * @component
 * @param {{ titulo?: string, children: React.ReactNode }} props - Propiedades del componente Panel
 * @param {string} [props.titulo] - Título opcional que se muestra en la cabecera del panel
 * @param {React.ReactNode} props.children - Elementos hijos que se renderizan dentro del panel
 * @returns {JSX.Element} Un contenedor estilizado con un título opcional y contenido hijo
 */
const Panel = ( {titulo, children} ) => {
  return (
    <div className='panel'>
        {titulo && <h3 className='panelTitulo'>{titulo}</h3>}
        {children}
    </div>
  )
}

export default Panel