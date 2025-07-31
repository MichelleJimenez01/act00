// este componente muestra la informacion de un usuario en una tarjeta
// se usa el hook useState para manejar si ya fue contactado

import { useState } from 'react'; // solo se importa una vez

export const UserCard = ({ user }) => {
  // se define el estado para saber si el usuario fue contactado
  const [isContacted, setIsContacted] = useState(false);

  // se extraen los datos del usuario del objeto user
  const { id, firstName, lastName, email, age, ein, image } = user;

  // esta funcion se ejecuta al hacer click en el boton
  const handleClick = () => {
    setIsContacted(!isContacted); // alterna el estado
  };

  return (
    <div className='card'>
      <img className='image' src={image} alt={firstName} />
      <h2 className='name'>{firstName} {lastName}</h2>
      <p>correo: {email}</p>
      <p>edad: {age}</p>
      <p>numero: {ein}</p>

      <button id={id} onClick={handleClick}>
        {isContacted ? 'contactado' : 'contactar'}
      </button>
    </div>
  );
};

export default UserCard;
