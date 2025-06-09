// UserCard.jsx
import style from "./usercard.module.css";
import { useState } from "react";

export const UserCard = ({ user }) => {
    const [isContacted, setIsContacted] = useState(false);

    const { id, name, description, image } = user;

    const handleClick = (userName) => {
        setIsContacted(true)
    };

    return (
        <div className={style.tarjeta}>
            <img src={image} alt="user" className={style.userimg} />
            <h2>{name}</h2>
            <p>{description}</p>

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
