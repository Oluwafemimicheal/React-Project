import React from 'react';
import {ArrowDown} from 'react-bootstrap-icons'
import Self from '../Main/image/Self.png'
import bgImage from '../Main/image/bg-image.png'
import './Banner.css'

const Banner = () => {

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
                            <button><a href="#Contact">Let's Connect <ArrowDown style={{fontSize:15}}/></a></button>
                        </div>
                        <div className="image">
                            <img src={bgImage} alt="" className='bg'/>
                            <img src={Self} alt='Loading' className='self-image'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Banner;
