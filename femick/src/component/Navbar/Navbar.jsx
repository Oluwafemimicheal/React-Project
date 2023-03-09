import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
      <nav className='navbar'>
        <div className="left-side">
        <span className='logo'>Femick
        </span>
        <ul className='nav-link'>
            <li><a href="home">Home</a></li>
            <li><a href="platform">Platform</a></li>
            <li><a href="solution">Solution</a></li>
            <li><a href="resources">Resources</a></li>
            <li><a href="about">About</a></li>
            <li><a href="contact">Contact</a></li>
        </ul>
        </div>
        <span className='log-in'>
            <a href="login"Log-in>Log-in</a>
        </span>
      </nav>
    );
}

export default Navbar;
