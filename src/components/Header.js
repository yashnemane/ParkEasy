import React from 'react';
import '../assests/styles/header.css';
import logo from '../assests/images/parkeasylogoaliceblue.jpg'

export default function Header () {

  return (
    <header className="header">
      <a href="#home"><div className="header-logo">
        <img src = {logo} alt="App Logo" />
      </div></a>
      <nav className="header-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#bookaspot">Products</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};