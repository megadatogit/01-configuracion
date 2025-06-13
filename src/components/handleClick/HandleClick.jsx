import React from "react";
import styles from "./handleClick.module.css";



const HandleClick = () => {

  const [contador, setContador] = React.useState(0);
  const aumentar = () => {setContador(contador + 1);};
  const disminuir = () => {setContador(contador > 0 ? contador - 1 : 0);};

    const colores = contador === 0 ? styles.red :
                        (contador >=1 && contador <=3 ? styles.green : styles.yellow)
    
  
  return (
    <div className={styles.cntIncremento}>

      <h1 className={colores}>Posición de clic: {contador}</h1>

      <div className={styles.cntBotones}>
        
        <div className={styles.cntAccion}>
            <button className={styles.btn} onClick={aumentar}>AUMENTAR</button>
            <div className={styles.cntTxt}>
            <p>Haz clic en el botón para aumentar el contador.</p>
            <p>El contador se incrementa cada vez que haces clic en el botón.</p>
            </div>
        </div>

        <div className={styles.cntAccion}>
            <button className={styles.btn} onClick={() => setContador(0)}>RESTABLECER</button>
            <div className={styles.cntTxt}>
            <p>Haz clic en el botón para reiniciar el contador.</p>
            <p>El contador se reinicia a cero cuando haces clic en el botón dereinicio.</p>
            </div>
        </div>

        <div className={styles.cntAccion}>
            <button className={styles.btn} onClick={disminuir}>DISMINUIR</button>
            <div className={styles.cntTxt}>
            <p>Haz clic en el botón para disminuir el contador.</p>
            <p>El contador se decrementa en uno cada vez que haces clic en el botón de disminución.</p>
            </div>

        </div>

      </div>
    </div>
  );
};

export default HandleClick;
