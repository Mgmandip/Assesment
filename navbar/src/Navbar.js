
import React, { useState } from 'react';
import './Navbar.css'; 
import Logo from './favicon.ico'; 

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleMenu = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className="logoimg" src={Logo} alt="Logo"/>
        <a href="/">Random</a>
      </div>
      <ul className={showLinks ? 'navbar-links active' : 'navbar-links'}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <button onClick={toggleMenu} className="navbar-toggle">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;