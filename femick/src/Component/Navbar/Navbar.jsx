import React from 'react';
import './navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
    return (
        <div className='h-container'>
            <div className='header'>
                <div className="logo">
                    <span></span>
                    <h1>FD</h1>
                </div>
                <nav>
                <Link to='Home' smooth='smooth'>Home</Link>
                <Link to='About' smooth='smooth'>About</Link>
                <Link to='Service' smooth='smooth'>Service</Link>
                <Link to='Blog' smooth='smooth'>Blog</Link>
                <Link to='Contact' smooth='smooth'>Contact</Link>
                </nav>
                <div className="btn">
                    <button type='button'>Log In</button>
                    <button type='button'>Sign Up</button>  
                </div>
            </div>
        </div>
    );
}

export default Navbar;
