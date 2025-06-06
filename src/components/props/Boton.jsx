import React from 'react'
import './boton.css'

const Boton = ({ texto, color, tamano, onClick }) => {

    const tamanos = {
        pequeno: "10px 20px",
        mediano: "15px 30px",
        grande:  "20px 40px",
    }

  return (
    <button
        onClick={onClick}
        style= {{
            backgroundColor: color,
            padding: tamanos[tamano],
            border: "none",
            borderRadius: "5px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
        }}
        
        >
      {texto}
    </button>
  );
};

export default Boton
