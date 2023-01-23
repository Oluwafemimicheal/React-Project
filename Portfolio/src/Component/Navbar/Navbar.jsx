import React, {useState, useRef} from 'react';
import {FaBars, FaTimes, FaUser} from 'react-icons/fa'
import {Link} from 'react-scroll'
import './Navbar.css'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const navRef = useRef()

    const changeNav = ()=>{
        if(window.scrollY >= 100){
            setNav(true)
        }else{
            setNav(false)
        }
    }
    window.addEventListener('scroll', changeNav)

    const showNav = ()=>{
        navRef.current.classList.toggle('responsive-bar')
       
    } 
    return (
       <nav className={nav ? 'Navbar-active' : 'Navbar-container'}>
            <div className= 'container'>
                <div className="row">
                    <div className="logo">
                            < FaUser style={{fontSize: 25, color:'steelblue'}}/>
                    </div>
                    <nav ref={navRef}>
                    <ul className= 'navbar'>
                        <li><Link to='Home' smooth={true} duration={1000} onClick={showNav}>Home</Link></li>
                        <li><Link to='About' smooth={true} duration={1000} onClick={showNav}>About</Link></li>
                        <li><Link to='Skill'smooth={true} duration={1000} onClick={showNav}>Skills</Link></li>
                        <li><Link to='Service'smooth={true} duration={1000} onClick={showNav}>Service</Link></li>
                        <li><Link to='Project'smooth={true} duration={1000} onClick={showNav}>Project</Link></li>
                        <li><Link to='Contact'smooth={true} duration={1000} onClick={showNav}>Contact</Link></li>
                    </ul>
                    <button onClick={showNav} className='nav-btn nav-close-btn'>
                        <FaTimes style={{fontSize: 20, color:'steelblue'}}/>
                    </button>
                    </nav>
                    <button onClick={showNav} className='nav-btn nav-bar'>
                        <FaBars style={{fontSize: 20, color:'steelblue'}}/>
                    </button>
                </div>
            </div>
       </nav>
    );
}

export default Navbar;