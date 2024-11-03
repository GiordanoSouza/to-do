import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar({active}) {
  return (
    <header>
    <nav>
        <div className="logo__wrapper">
        <img src={logo} alt="logo"/>
        <h4>Ligma</h4>
        </div>
      <ul className ="navigation-menu">
      
      <li><Link to="/" className={active==='home' ? 'activeNav' : ''}>Home</Link></li>
      <li><Link to="/login">login</Link></li>
      <li><Link to="/register">Register</Link></li>

      </ul>
    </nav>
  </header>
  )
}

export default Navbar