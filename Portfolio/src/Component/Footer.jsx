import React from 'react'
import {Facebook, Instagram, Whatsapp, Telegram, Github} from 'react-bootstrap-icons'

export default function Footer() {
  const style={
    fontSize: 35
  }
    return (
      <footer>
        <div className="container">
        <div className="social-media row">
             <i><Facebook style={style}/></i>
             <i><Instagram style={style}/></i>
             <i><Whatsapp style={style}/></i>
             <i><Telegram style={style}/></i>
             <i><Github style={style}/></i>
        </div>
        <div className="header">
            <p>Designed by Oluwafemi Micheal &copy; 2022!</p>
        </div>
        </div>
      </footer>
    )
}
