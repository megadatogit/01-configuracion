import React from 'react'
import style from './section.module.css'
import userimg from '../../assets/user.svg'

const frutas = ['manzana', 'pera', 'naranja'];

const users = [
    {
        id: 1,
        name: 'Fantys',
        description: 'Frontend Develper',
        image: userimg
    },
    {
        id: 2,
        name: 'Loopy',
        description: 'back Develper',
        image: userimg
    },
    {
        id: 3,
        name: 'rusty',
        description: 'senior Develper',
        image: userimg
    },
]

const Section = ({children, title, show}) => {

    const handleClick = (name) => {
        console.log(`contactando a ${name}`);
    }

  return (
    <div>
        <p className={style.inicial}>{title || "por defecto" }</p>
        {children}
        <p className={style.second}>
            {
                show ? <span>aqui se ve activo</span> : <span>no esta activo</span>
            }
        </p>

        <ul>
            {
                frutas.map(fruta=><li key={fruta} >{fruta}</li>)
            }
        </ul>

        <hr />

            <section className={style.section}>
                {
                    users.map(({id, name, description, image})=>{
                        return(
                            <div key={id} className={style.tarjeta}>
                                <img src={image} alt="user" className={style.userimg} />
                                <h2>{name}</h2>
                                <p>{description}</p>
                                <button id={id} className={style.button} onClick={()=>handleClick(name)}>Contactar</button>
                            </div>
                        )
                    })
                }
            </section>

    </div>
  )
}

export default Section