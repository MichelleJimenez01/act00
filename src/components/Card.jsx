import React from 'react';
import './Card.css';

const Card = ({ nombre, precio }) => {
  return (
    <div className="card">
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
    </div>
  );
};

export default Card;
