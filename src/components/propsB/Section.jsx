// Section.jsx
import { useState, useEffect } from 'react';
import style from './section.module.css';
import userimg from '../../assets/user.svg';
import { UserCard } from '../userCard/UserCard';

const frutas = ['manzana', 'pera', 'naranja'];

const users = [
  { id: 1, name: 'Usuario 1', description: 'saludable',        image: userimg },
  { id: 2, name: 'Usuario 2', description: 'con padecimiento', image: userimg },
  { id: 3, name: 'Usuario 3', description: 'condición crítica',image: userimg },
];

export const Section = ({ children, title, show }) => {
  const [count, setCount] = useState(0);
  

  
    
    useEffect(()=>{
        console.log('useEffect ejecutado')
    },[count])

    const handleClick = () => {
      setCount(count + 1)
    }
    
    


  

  return (
    <div>
      <p className={style.inicial}>{title || 'por defecto'}</p>
      {children}

      <p className={style.second}>
        {show ? <span>Aquí se ve activo</span> : <span>No está activo</span>}
      </p>

      <ul>
        {frutas.map((fruta) => (
          <li key={fruta}>{fruta}</li>
        ))}
      </ul>

      <hr />

      <p>Total contactos: {count}</p> {/* opcional */}

      <section className={style.section}>
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            
          />
        ))}
      </section>
    </div>
  );
};

