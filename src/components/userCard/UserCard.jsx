// UserCard.jsx
import style from "./usercard.module.css";
import { useState, useEffect } from "react";

export const UserCard = ({ user }) => {
    const [isContacted, setIsContacted] = useState(false);
    const [tecnologias, setTecnologias] = useState( ['html','CSS','JS'] )
    const [addres, setAddres] = useState({street:'calle falsa', number:123})
    const { id, name, description, image } = user;

    

    const handleClick = (userName) => {
        setAddres({...addres, street: 'Nueva calle', number: 456})
        //setTecnologias([...tecnologias, 'react'])
        console.log(addres)
        setIsContacted(!isContacted)
    };

    return (
        <div className={style.tarjeta}>
            <img src={image} alt="user" className={style.userimg} />
            <h2>{name}</h2>
            <p>{description}</p>
            <hr className={style.hr}/>
            <p>Lenguajes</p>
                <ul>
                    {
                        
                    }
                </ul>


            <button
                id={id}
                className={style.button}
                onClick={() => handleClick()} 
            >
                {
                    isContacted ? 'Contactado' : 'Contactar'
                }
            </button>
        </div>
    );
};
