import React from 'react'
import styles from "./graficoDonaCompleta.module.css"

const GraficoDonaCompleta = ({
    valor = 75,
    titulo = "Progreso",
    unidad = "%",
    tipoGr = "completo",
    colorFondo = "#e0e0e0",
    colorProgreso = "#4ECDC4"
}) => {
    
    const centroX = 100;
    const centroY = 100;
    const radioExterno = 80;
    const radioInterno = 50;
    const centroYAjustado = tipoGr === "medio" ? 130 : centroY;

    // Función para crear un arco de dona
    const crearArcoDona = (anguloInicio, anguloFin) => {
        // Convertir a radianes
        const inicioRad = (anguloInicio * Math.PI) / 180;
        const finRad = (anguloFin * Math.PI) / 180;
        
        // Puntos del arco exterior
        const x1Ext = centroX + radioExterno * Math.cos(inicioRad);
        const y1Ext = centroYAjustado + radioExterno * Math.sin(inicioRad);
        const x2Ext = centroX + radioExterno * Math.cos(finRad);
        const y2Ext = centroYAjustado + radioExterno * Math.sin(finRad);
        
        // Puntos del arco interior
        const x1Int = centroX + radioInterno * Math.cos(inicioRad);
        const y1Int = centroYAjustado + radioInterno * Math.sin(inicioRad);
        const x2Int = centroX + radioInterno * Math.cos(finRad);
        const y2Int = centroYAjustado + radioInterno * Math.sin(finRad);
        
        // Determinar si el arco es mayor a 180 grados
        const largeArc = anguloFin - anguloInicio > 180 ? 1 : 0;
        
        // Crear el path completo de la dona
        return `
            M ${x1Ext} ${y1Ext}
            A ${radioExterno} ${radioExterno} 0 ${largeArc} 1 ${x2Ext} ${y2Ext}
            L ${x2Int} ${y2Int}
            A ${radioInterno} ${radioInterno} 0 ${largeArc} 0 ${x1Int} ${y1Int}
            Z
        `;
    };

    // Configurar ángulos según el tipo
    let anguloInicio, anguloFin, anguloProgreso;
    
    if (tipoGr === "medio") {
        anguloInicio = 180;  // Empieza a la izquierda
        anguloFin = 360;     // Termina a la derecha (0°)
        anguloProgreso = anguloInicio + (valor / 100) * 180;
    } else {
        anguloInicio = -90;   // Empieza arriba
        anguloFin = 270;      // Una vuelta completa
        anguloProgreso = anguloInicio + (valor / 100) * 360;
    }

    return (
        <div className={styles.contenedor}>
            <svg 
                className={styles.svg} 
                viewBox={tipoGr === "medio" ? "0 0 200 150" : "0 0 200 200"} 
                preserveAspectRatio="xMidYMid meet"
            >
                <g>
                    {/* Dona de fondo */}
                    <path
                        d={crearArcoDona(anguloInicio, anguloFin)}
                        fill={colorFondo}
                    />
                    
                    {/* Dona de progreso */}
                    <path
                        d={crearArcoDona(anguloInicio, anguloProgreso)}
                        fill={colorProgreso}
                    />
                    
                    {/* Texto en el centro */}
                    <text
                        x={centroX}
                        y={tipoGr === "medio" ? centroYAjustado - 20 : centroY}
                        textAnchor="middle"
                        fontSize="28"
                        fontWeight="bold"
                        fill="#333"
                    >
                        {valor}{unidad}
                    </text>
                    
                    {/* Título */}
                    <text
                        x={centroX}
                        y={tipoGr === "medio" ? centroYAjustado - 5 : centroY + 20}
                        textAnchor="middle"
                        fontSize="8"
                        fill="#666"
                    >
                        {titulo}
                    </text>
                </g>
            </svg>
        </div>
    )
}

export default GraficoDonaCompleta
