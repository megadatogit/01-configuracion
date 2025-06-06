import React from 'react'
import './tarjetasUsuario.css'
import Alergia from './Alergia';


const TarjetaUsuario = ({nombre, edad, profesion}) => {
  return (
    <div className="tarjeta">
      <h2>{nombre}</h2>
      <p>Profesion: {profesion}</p>
      <p>Edad: {edad} años</p>

      <Alergia tipo="sapullido" sintoma="comesón" control="no recibido"/>
    
    </div>
    
  );
}
export default TarjetaUsuario

