import React from 'react';
import Self from '../assess/image/Self.png'

export const Banner = () => {

    return (
        <div className='Banner-container' id='Home'>
            <div className="overlay">
                <div className="container banner">
                    <div className="row1">
                        <div className="image">
                            <img src={Self} alt='Loading' style={{width:250}} />
                        </div>
                        <div className="detail">
                            <h3>Hello, I'm</h3>
                            <h1>OLUWAFEMI <br/> MICHEAL</h1>
                            <h2>FRONTEND DEVELOPER & GRAPHICS DESIGNER</h2>
                            <p>I'm a Front-end developer, specializing in building 
                            (and occasionally designing), I enjoy creating things that live on the internet</p>
                            <button><a href="#Contact">Let's Connect</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
