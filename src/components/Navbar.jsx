import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation(); 

  return (
    <nav className="navbar">
      <div className="navbar-title">Merch y mas</div>
      <ul className="navbar-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Inicio</Link>
        </li>
        <li className={location.pathname === '/productos' ? 'active' : ''}>
          <Link to="/productos">Productos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
