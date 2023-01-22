import React, {useState} from 'react';
import * as Icon from 'react-bootstrap-icons'
import {Link} from 'react-scroll'
import './Navbar.css'


export const Navbar = () => {
    const [nav, setNav] = useState(false)

    const changeNav = ()=>{
        if(window.scrollY >= 100){
            setNav(true)
        }else{
            setNav(false)
        }
    }
    window.addEventListener('scroll', changeNav)
  
    return (
       <nav className={nav ? 'Navbar-active' : 'Navbar-container'}>
            <div className="container">
                <div className="row">
                    <div className="logo">
                            <Icon.Person style={{fontSize: 25, color:'steelblue'}}/>
                    </div>
                    <ul className='navbar'>
                        <li><Link to='Home' smooth={true} duration={1000}>Home</Link></li>
                        <li><Link to='About' smooth={true} duration={1000}>About</Link></li>
                        <li><Link to='Skill'smooth={true} duration={1000}>Skills</Link></li>
                        <li><Link to='Service'smooth={true} duration={1000}>Service</Link></li>
                        <li><Link to='Project'smooth={true} duration={1000}>Project</Link></li>
                        <li><Link to='Contact'smooth={true} duration={1000}>Contact</Link></li>
                    </ul>
                    <div className="menu">
                        <Icon.MenuDown style={{fontSize: 25, color:'steelblue'}}/>
                    </div>
                </div>
            </div>
       </nav>
    );
}
