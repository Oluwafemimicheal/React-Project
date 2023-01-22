import React from 'react'
import {Facebook, Instagram, Whatsapp, Telegram, Github} from 'react-bootstrap-icons'
import './Footer.css'
const Footer= () => {
  const style={
    fontSize: 30
  }

    return (
      <footer id='Contact'>
        <div className="social-media">
             <i><Facebook style={style}/></i>
             <i><Instagram style={style}/></i>
             <i><Whatsapp style={style}/></i>
             <i><Telegram style={style}/></i>
             <i><Github style={style}/></i>
        </div>
        <div className="header">
            <p>Designed by Oluwafemi Micheal &copy;2023!</p>
        </div>
      </footer>
    )
}
export default Footer;
