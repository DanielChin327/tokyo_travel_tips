import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar({ isLoggedIn, handleLogout, userType }) {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll and toggle "scrolled" state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Toggle scrolled class after 50px of scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <ul className="nav-links">
        <li>
          <Link className="navbar-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/tokyo">
            Tokyo
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/itineraries">
            Itineraries
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link
                className="navbar-link"
                to={
                  userType === 'employer'
                    ? '/employer-dashboard'
                    : '/job-seeker-dashboard'
                }>
                Dashboard
              </Link>
            </li>
            <li>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className="navbar-link" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="navbar-link" to="/register">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
