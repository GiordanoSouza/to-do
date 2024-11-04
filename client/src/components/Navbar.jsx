import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { getUserDetails } from '../util/GetUser';

function Navbar({active}) {
  const [user,setUser] = useState(null);
  useEffect(() => {
    const userDetails = getUserDetails();
    setUser(userDetails);
  },[]);
  return (
    <header>
    <nav>
        <div className="logo__wrapper">
        <img src={logo} alt="logo"/>
        <h4>Ligma</h4>
        </div>
      <ul className ="navigation-menu">
      
      <li><Link to="/" className={active==='home' ? 'activeNav' : ''}>Home</Link></li>
      {user && <li><Link to="/to-do-list" className={active==='to-do-list' && 'activeNav'}>To Do List</Link></li>}
      <li><Link to="/login">login</Link></li>
      <li><Link to="/register">Register</Link></li>

      </ul>
    </nav>
  </header>
  )
}

export default Navbar