import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <h2 className='logo'>Sanjai <span>N</span></h2>
      <div className='hamburger' onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={menuOpen ? 'show' : ''}>
        <li style={{ '--i': 1 }}><Link to={'/'}>Home</Link></li>
        <li style={{ '--i': 2 }}><Link to={'/profile'}>Profile</Link></li>
        <li style={{ '--i': 3 }}><Link to={'/works'}>Work</Link></li>
        <li style={{ '--i': 4 }}><Link to={'/intern'}>Internship</Link></li>
        <li style={{ '--i': 5 }}><Link to={'/certificate'}>Certification</Link></li>
        <div className='contact-btn'><Link to={'/contact'}>Contact</Link></div>
      </ul>
      
    </nav>
  );
}

export default Nav;
