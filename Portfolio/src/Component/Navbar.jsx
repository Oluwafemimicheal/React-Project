import React, {useState} from 'react';
import * as Icon from 'react-bootstrap-icons'
import {Link} from 'react-scroll'

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
                            <Icon.Person style={{fontSize: 35, color:'steelblue'}}/>
                    </div>
                    <ul className='navbar'>
                        <li><Link to='Home' smooth={true} duration={1000}>Home</Link></li>
                        <li><Link to='Skill'smooth={true} duration={1000}>Skill</Link></li>
                        <li><Link to='Experience'smooth={true} duration={1000}>Experience</Link></li>
                        <li><Link to='Project'smooth={true} duration={1000}>Project</Link></li>
                        <li><Link to='Contact'smooth={true} duration={1000}>Contact</Link></li>
                        <button>Let's Chat</button>
                    </ul>
                    <div className="menu">
                        <Icon.MenuDown/>
                    </div>
                </div>
            </div>
       </nav>
    );
}
