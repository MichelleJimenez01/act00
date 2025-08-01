// este componente carga la lista de productos desde una api
// permite buscar por nombre o categoria

import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import './Card.css';
import './ProductList.css';

const ProductList = () => {
  // lista de productos traidos desde la api
  const [products, setProducts] = useState([]);

  // texto de busqueda escrito por el usuario
  const [searchTerm, setSearchTerm] = useState('');

  // se obtiene la lista de productos desde la api fakestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data); // se guarda el arreglo completo en el estado
      } catch (error) {
        console.error('error al cargar productos', error);
      }
    };

    fetchProducts();
  }, []); // se ejecuta solo una vez al cargar

  // funcion que actualiza el valor del campo de busqueda
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // se filtran los productos segun el texto ingresado
  const filteredProducts = products.filter((product) =>
    `${product.title} ${product.category}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      <input
        type="text"
        placeholder="buscar por nombre o categoria"
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />

      {/* se muestran las tarjetas de producto filtradas */}
      <section className="product-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default ProductList;
