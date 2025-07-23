import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css'; // se importan los estilos

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">mi sitio</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" end className="nav-link">
            inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/productos" className="nav-link">
            productos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
