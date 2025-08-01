// este componente muestra la informacion de un producto en una tarjeta
// se usa el hook useState para manejar si se muestra o no la descripcion
// tambien se usa para manejar si el producto fue marcado como comprado o no

import { useState } from 'react'; // se importa el hook usestate

export const ProductCard = ({ product }) => {
  // estado para alternar si se muestra o no la descripcion del producto
  const [showDetails, setShowDetails] = useState(false);

  // estado para saber si el producto fue comprado (simulando contacto)
  const [isPurchased, setIsPurchased] = useState(false);

  // se extraen los datos del producto desde el objeto product
  const { id, title, price, description, image, category } = product;

  // funcion que alterna el estado de showdetails
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // funcion que alterna el estado de isPurchased
  const handlePurchase = () => {
    setIsPurchased(!isPurchased);
  };

  return (
    <div className="card">
      <img className="image" src={image} alt={title} />
      <h2 className="name">{title}</h2>
      <p>categoria: {category}</p>
      <p>precio: ${price}</p>

      {/* boton para mostrar u ocultar descripcion */}
      <button onClick={toggleDetails}>
        {showDetails ? 'ocultar descripcion' : 'ver descripcion'}
      </button>

      {/* si showdetails es true, se muestra la descripcion */}
      {showDetails && <p className="Description">{description}</p>}

      {/* boton para marcar como comprado o no */}
      <button onClick={handlePurchase}>
        {isPurchased ? 'agregado' : 'agregar a carrito'}
      </button>
    </div>
  );
};
