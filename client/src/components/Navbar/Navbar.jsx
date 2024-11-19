import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Navbar.scss'

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/user/logout');
      localStorage.removeItem('accessToken'); // Remove the token
      setIsLoggedIn(false); // Update login state
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error('Logout error:', error);
      alert('An error occurred during logout.');
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Intro</Link>
        </li>
      </ul>
      <div className="auth-button">
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
