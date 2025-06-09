import React from 'react';
import './tarjeta.css'

const Tajeta = ({ titulo, children }) => {
  return (
    <div className='tarjeta'>
        {titulo && <h3 style={{marginBottom:'10px'}}>{titulo}</h3>}
        {children}
    </div>
  );
};

export default Tajeta