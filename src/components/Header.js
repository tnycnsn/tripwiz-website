import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-container">
          <img 
            src="/logo192.png"
            alt="TripWiz Logo" 
            className="logo"
          />
          <span className="logo-text">TripWiz</span>
        </Link>
        
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 