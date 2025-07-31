// este componente carga la lista de usuarios desde una api
// permite buscar por nombre o correo y llevar un contador

import { useEffect, useState } from 'react';
import { UserCard } from './UserCard';
import './Card.css';
import './ProductList.css';

const ProductList = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // se obtiene la lista de usuarios desde la api
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://dummyjson.com/users');
        const data = await res.json();
        setUsers(data.users);
      } catch (error) {
        console.error('error al obtener usuarios:', error);
      }
    };

    fetchUsers();
  }, [count]);

  // actualiza el contador
  const handleClick = () => {
    setCount(count + 1);
  };

  // actualiza el texto de busqueda
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // filtra los usuarios segun el texto
  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName} ${user.email}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      <h2>contador: {count}</h2>
      <button onClick={handleClick}>aumentar contador</button>

      <input
        type="text"
        placeholder="buscar por nombre o correo"
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />

      <section className="product-container">
        {
          filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))
        }
      </section>
    </div>
  );
};

export default ProductList;
