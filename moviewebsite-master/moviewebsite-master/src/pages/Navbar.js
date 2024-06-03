// Navbar.js
import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleFavoritesClick = () => {
        if (token) {
          navigate('/fav');
        } else {
          navigate('/login');
        }
      };
      const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
      };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">Search Movies By Omdb-API</Link>
      </div>
      <div className="navbar-right">
        <a  onClick={handleFavoritesClick}>Favorites</a>
        {!token ? (
          <Link to="/login" className="navbar-link">Login</Link>
        ) : (
          <Link to ="/" onClick={handleLogout} className="navbar-link">Logout</Link>
        )}      </div>
    </nav>
  );
};

export default Navbar;
