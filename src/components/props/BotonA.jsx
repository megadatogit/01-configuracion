import React from 'react'
import styles from './botonA.module.css'

const BotonA = ({texto, tipo='default', onClick}) => {
  return (
    <button
        className={`${styles.botona} ${styles[tipo]}`}
        onClick={onClick}
    >
        {texto}
    </button>
  );
};

export default BotonA