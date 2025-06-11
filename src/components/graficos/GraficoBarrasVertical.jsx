import React from 'react'
import style from "./graficoBarrasVertical.module.css"

const GraficoBarrasVertical = ({

    tituloEjeY   = "DESCRIPCIÓN EJE Y",
    unidadesEjeY = "unidades",
    tituloEjeX   = "DESCRIPCIÓN EJE X", 
    unidadesEjeX = "unidades",
    datos        = [],
    valorMaximoY = 5

}) => {

    /* configuración del área de gráfico */
    const config = {
      inicioX: 80,
      inicioY: 20,
      finY: 120,
      anchoTotal: 200,
      alturaTotal: 100,
    }

    //cálculo de barras
    const numeroDeDatos = datos.length || 1;
    const anchoBarra = config.anchoTotal / (numeroDeDatos * 2);
    const espacioEntreBarra = anchoBarra;

  return (
    <div className={style.svg}>
        <svg className="svg" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet">

            {/* eje y */}
            <line x1="80" y1="20" x2="80" y2="130" stroke="#f1EFEC" strokeWidth="1"
            strokeDasharray="0 0" />
            {/* <line x1="80" y1="20" x2="80" y2="120" stroke="#f1EFEC" stroke-width="5"
            stroke-dasharray="1 10" /> */}
            {/* eje x */}
            <line x1="70" y1="120" x2="280" y2="120" stroke="#f1EFEC" strokeWidth="1"
            strokeDasharray="0 0" />
            {/* <line x1="80" y1="120" x2="280" y2="120" stroke="#f1EFEC" stroke-width="5"
            stroke-dasharray="1 10" /> */}

            
            {/* <text x="80" y="30" font-family="Arial" font-size="10" fill="darkblue" class="sistolica" transform="rotate(-90, 100, 100)">{tituloEjeY}</text>
            <text x="80" y="45" font-family="Arial" font-size="8" fill="darkblue" class="sistolica" transform="rotate(-90, 100, 100)">{unidadesEjeY}</text> */}
            
            {/* valores en el eje y */}

            {/* Agregar números en el eje Y */}
        {[1, 2, 3, 4, 5].map((numero) => {
          // Calcular la posición Y para cada número
          const posicionY = config.finY - ((numero / valorMaximoY) * config.alturaTotal);
          
          return (
            <g key={numero}>
              {/* Línea horizontal de referencia */}
              <line 
                x1={config.inicioX - 5} 
                y1={posicionY} 
                x2={config.inicioX} 
                y2={posicionY} 
                stroke="#DFDFDF" 
                strokeWidth="1" 
              />
              {/* Número */}
              <text 
                x={config.inicioX - 10} 
                y={posicionY + 3} 
                fontFamily="Arial" 
                fontSize="8" 
                fill="#DFDFDF" 
                textAnchor="end"
              >
                {numero}
              </text>
            </g>
          );
        })}

         {/* BARRAS - aquí está la magia */}
        {datos.map((dato, indice) => {
          // Calcular posición X de cada barra
          const posicionX = config.inicioX + (indice * (anchoBarra + espacioEntreBarra)) + espacioEntreBarra/2;
          
          // Calcular altura de la barra
          const alturaBarra = (dato.comidas / valorMaximoY) * config.alturaTotal;
          
          // Calcular posición Y (recuerda que en SVG la Y crece hacia abajo)
          const posicionY = config.finY - alturaBarra;

          return (
            <g key={indice}>
              {/* La barra */}
              <rect
                x={posicionX}
                y={posicionY}
                width={anchoBarra}
                height={alturaBarra}
                fill={dato.colorBarra || "#FF6B6B"} // Si no se especifica color, usa un color por defecto
                stroke=""
                strokeWidth="1"
                className={style.barra}
              />
              
              {/* Valor sobre la barra */}
              <text
                x={posicionX + anchoBarra/2}
                y={posicionY - 5}
                fontFamily="Arial"
                fontSize="7"
                fill="#bebebe"
                textAnchor="middle"
              >
                {dato.comidas}
              </text>
              
              {/* Día debajo */}
              <text
                x={posicionX + anchoBarra/2}
                y={config.finY + 15}
                fontFamily="Arial"
                fontSize="8"
                fill="#DFDFDF"
                textAnchor="middle"
              >
                {dato.dia.substring(0, 3)} {/* Solo las primeras 3 letras */}
              </text>
            </g>
          );
        })}

        {/* títulos de los ejes */}
        <text x="20" y="90" fontFamily="Arial" fontSize="10" fill="" 
              transform="rotate(-90, 20, 70)" textAnchor="middle">
          {tituloEjeY}
        </text>
        <text x="10" y="110" fontFamily="Arial" fontSize="8" fill="" 
              transform="rotate(-90, 10, 70)" textAnchor="middle">
          {unidadesEjeY}
        </text>
        <text x="180" y="150" fontFamily="Arial" fontSize="10" fill="" 
              textAnchor="middle">
          {tituloEjeX}
        </text>
        <text x="180" y="160" fontFamily="Arial" fontSize="8" fill="" 
              textAnchor="middle">
          {unidadesEjeX}
        </text>

            
            {/* <text x="85" y="155" font-family="Arial" font-size="10" fill="darkblue" class="sistolica" >{tituloEjeX}</text>
            <text x="85" y="170" font-family="Arial" font-size="8" fill="darkblue" class="sistolica" >{unidadesEjeX}</text> */}
            
        </svg>
      
    </div>
  )
}

export default GraficoBarrasVertical
