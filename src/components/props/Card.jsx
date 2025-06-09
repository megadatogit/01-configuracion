import React from 'react'
import styles from './card.module.css'

const Card = ( {titulo, tipo}) => {
  return (
    <div className={`${styles.card} ${styles[tipo]}`}>
        <p>{titulo}</p>
        
    </div>
  )
}

export default Card