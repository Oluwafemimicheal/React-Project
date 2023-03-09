import React from 'react';
import './Navbar.css'
import {BiSearchBar} from 'react-icons/bi'

const Navbar = () => {
    return (
        <div>
            <div className=' container navbar'>
                <span>
                    <div className="logo">
                        <h1>femick</h1>
                    </div>
                    <nav>
                        <a href="Home">What is Femick</a>
                        <a href="Platform">Platform</a>
                        <a href="Solution">Solution</a>
                        <a href="Resources">Resources</a>
                        <a href="About">About</a>
                        <a href="Contact">Contact</a>
                    </nav>
                </span>
                <div className="login">
                    <i></i>
                    <a href="Login">Login</a>
                </div>
            </div>

         </div>
    );
}

export default Navbar;
