import React, { useState } from 'react';
import styles from './panela.module.css'; 

const PanelA = ({ titulo, children }) => {
  // Controla si el contenido está visible o no
  const [visible, setVisible] = useState(true);

  // Alterna la visibilidad
  const alternarVisibilidad = () => {
    setVisible(!visible);
  };

  return (
    <div className={styles.panela}>
      <h3>{titulo}</h3>
      <button onClick={alternarVisibilidad}>
        {visible ? 'Ocultar contenido' : 'Mostrar contenido'}
      </button>
      {visible && <div className={styles.contenido}>{children}</div>}
    </div>
  );
};

export default PanelA;