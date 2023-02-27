import React from 'react'
import {Facebook, Instagram, Whatsapp, Telegram, Github} from 'react-bootstrap-icons'
import './Footer.css'
const Footer= () => {
  const style={
    fontSize: 30
  }

    return (
      <footer className='container' id='Contact'>
        <div className="footer_container">
        <div className="social_media">
             <i><Facebook style={style}/></i>
             <i><Instagram style={style}/></i>
             <i><Whatsapp style={style}/></i>
             <i><Telegram style={style}/></i>
             <i><Github style={style}/></i>
        </div>
        <div className="header">
            <small>Designed by Oluwafemi Micheal &copy;2023!</small>
        </div>
        </div>
      </footer>
    )
}
export default Footer;
