import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Publicar Pedido</Link>
        </li>
        <li className="navbar-item">
          <Link to="/notificaciones" className="navbar-link">Notificaciones</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;