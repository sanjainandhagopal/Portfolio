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
        <li style={{ '--i': 1 }}><Link to={'/Portfolio/'}>Home</Link></li>
        <li style={{ '--i': 2 }}><Link to={'/Portfolio/profile'}>Profile</Link></li>
        <li style={{ '--i': 3 }}><Link to={'/Portfolio/works'}>Project Portfolio</Link></li>
        <li style={{ '--i': 4 }}><Link to={'/Portfolio/intern'}>Internships</Link></li>
        <li style={{ '--i': 5 }}><Link to={'/Portfolio/certificate'}>Certifications</Link></li>
        <div className='contact-btn'><Link to={'/Portfolio/contact'}>Contact</Link></div>
      </ul>
      
    </nav>
  );
}

export default Nav;
