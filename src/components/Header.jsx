import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../components/Header.css"

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className='mobile-header'>
      <Link to={'/'}>
      <div className='logo'>
          <img src='/logo-overlap.svg' alt='Logo' />
        <p className='site-title'>The Next Step</p>
      </div>
      </Link>
      <button className='menu-button' onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </button>
      <nav className={`menu ${isOpen ? 'open' : 'desktop'}`}>
        <ul>
          <li>
            <NavLink to='/About'>About</NavLink>
          </li>
          <li>
            <NavLink to='/Contacts'>Contacts</NavLink>
          </li>
          <li>
            <NavLink to='/FAQ'>FAQ</NavLink>
          </li>
          <li>
            <NavLink to='/AlbumsPage'>Genres Page</NavLink>
          </li>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
