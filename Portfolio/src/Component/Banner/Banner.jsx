import React, {useState} from 'react';
import {ArrowDown} from 'react-bootstrap-icons'
import Self from '../Main/image/Self.png'
import bgImage from '../Main/image/bg-image.png'
import './Banner.css'
import Message from '../massage/message';
import{FaWhatsapp, FaTimes} from 'react-icons/fa'


const Banner = () => {
    const[ megPop, setMegPop] = useState(false)
    return (
        <div className='Banner-container' id='Home'>
            <div className="overlay">
                <div className="container banner">
                    <div className="row1">
                        <div className="detail">
                            <h3>Hello, I'M</h3>
                            <h1>OLUWAFEMI <br/> MICHEAL</h1>
                            <h2>FRONTEND DEVELOPER & GRAPHICS DESIGNER</h2>
                            <p>I'm a Front-end developer, specializing in building 
                            (and occasionally designing), I enjoy creating things that live on the internet</p>
                            <button onClick={()=> setMegPop(true)}>Let's Connect <ArrowDown style={{fontSize:15}}/></button>
                        </div>
                        <div className="image">
                            <img src={bgImage} alt="" className='bg'/>
                            <img src={Self} alt='Loading' className='self-image'/>
                        </div>
                    </div>
                </div>
            <Message trigger={megPop}>
            <FaWhatsapp style={{fontSize: 50, color: 'green'}}/>
            <button className='btn' onClick={()=> setMegPop(false)}><FaTimes/></button>
            <p>Hy, Friend let start chatting!</p>
              <h1>09163657267</h1>
              <button className='button'>Let's Chat</button>
            </Message>
            </div>
        </div>
    );
}
export default Banner;
