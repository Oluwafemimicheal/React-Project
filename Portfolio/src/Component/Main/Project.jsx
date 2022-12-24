import React from 'react';
import pic1 from './image/digital.png';
import pic2 from './image/video_editor.png';
import pic3 from './image/web 1.png';
import pic4 from './image/web 2.png';


const Project = () => {
    const style={
        width:180
    }

    return (
        <section id='Project' className='container Project'>
            <div className="header">
            <h1>Project</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, vel sit voluptatem numquam</p>
        </div>
        <div className="card-row">
            <div className="card-p">
                <span></span>
                <img src={pic1}  style={style} alt="Loading"/>
            </div>
            <div className="card-p">
                <span></span>
                <img src={pic2} style={style} alt="Loading"/>
            </div>
            <div className="card-p">
                <span></span>
                <img src={pic3} style={style} alt="Loading"/>
            </div>
            <div className="card-p">
                <span></span>
                <img src={pic4} style={style}alt="Loading"/>
            </div>
            <div className="card-p">
                <span></span>
                <img src={pic2} style={style} alt="Loading"/>
            </div>
            <div className="card-p">
                <span>
                    <h3>Social-Media <br/> Marketing</h3>
                </span>
                <img src={pic1} style={style} alt="Loading"/>
            </div>
        </div>

        </section>
    );
}

export default Project;
