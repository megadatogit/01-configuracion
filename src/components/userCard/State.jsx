import React, { useState } from 'react'
import style from './state.module.css'


const State = () => {

    const [count, setCount] = useState(0)

  return (
    <div>
        <p className={style.txt}> contador esta en {count}</p>
        <button onClick={()=> setCount(count + 1)}> incrementar</button>
        <button onClick={()=> setCount(count - 1)}> decrementar</button>

    </div>
  )
}

export default State
