import React from 'react'
import styles from './cardA.module.css'

export const CardA = ({tipo='info', children}) => {
  return (
    <div className={`${styles.card} ${styles[tipo]}` }>
        {children}
    </div>
  );
};


