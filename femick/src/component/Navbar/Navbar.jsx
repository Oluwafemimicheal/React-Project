import {useState} from 'react';
import './Navbar.css'
import {FaBars, FaTimes, FaSearch} from 'react-icons/fa'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)
    return (
      <nav className='navbar'>
        <div className="left-side">
          <span className='logo'>Femick</span>
          <ul className={ isMobile ? 'mobile-nav-link' : 'nav-link'}>
              <li onClick={()=> setIsMobile(false)}><a href="home">What is Femick</a></li>
              <li  onClick={()=> setIsMobile(false)}><a href="platform">Platform</a></li>
              <li  onClick={()=> setIsMobile(false)}><a href="solution">Solution</a></li>
              <li  onClick={()=> setIsMobile(false)}><a href="resources">Resources</a></li>
              <li  onClick={()=> setIsMobile(false)}><a href="about">About</a></li>
              <li  onClick={()=> setIsMobile(false)}><a href="contact">Contact</a></li>
          </ul>
        </div>
        <span className='log'>
          <FaSearch style={{fontSize:'25px'}}/>
            <a href="login" className='login' Log-in>Log-in</a>
        </span>
        <button className='mobile-btn' onClick={ () => setIsMobile(!isMobile)}>
          {isMobile ? <FaTimes/> : <FaBars/>}
        </button>
      </nav>
    );
}

export default Navbar;
