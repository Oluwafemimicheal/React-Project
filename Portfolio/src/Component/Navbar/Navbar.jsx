import React, {useState, useRef} from 'react';
import {FaBars, FaTimes, FaHome, FaUser, FaServer, FaSkiing, FaComment, FaPhoneSquare} from 'react-icons/fa'
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
        navRef.current.classList.toggle('menu-bar')
       
    } 
    
    return (
       <nav className={nav ? 'Navbar-active' : 'Navbar-container'}>
            <div className= 'container'>
                <div className="nav-row">
                    <nav ref={navRef}>
                        <ul className= 'navbar'>
                            <li><Link to='Home'spy={true} smooth={true} duration={1000} onClick={showNav}><FaHome/></Link></li>
                            <li><Link to='About' spy={true}  smooth={true} duration={1000} onClick={showNav}><FaUser/></Link></li>
                            <li><Link to='Skill' spy={true}  smooth={true} duration={1000} onClick={showNav}><FaSkiing/></Link></li>
                            <li><Link to='Service' spy={true}  smooth={true} duration={1000} onClick={showNav}><FaServer/></Link></li>
                            <li><Link to='Project' spy={true}  smooth={true} duration={1000} onClick={showNav}><FaComment/></Link></li>
                            <li><Link to='Contact' spy={true}  smooth={true} duration={1000} onClick={showNav}><FaPhoneSquare/></Link></li>
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
