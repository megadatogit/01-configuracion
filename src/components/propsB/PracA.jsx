import React from 'react'
import style from './pracA.module.css'
const PracA = ({show}) => {
  return (
    <div>
        {
            show ? <p className={style.txt}>se muestra prop show si true</p> : <p className={style.txt}>show false</p>
        }
    </div>
  )
}

export default PracA