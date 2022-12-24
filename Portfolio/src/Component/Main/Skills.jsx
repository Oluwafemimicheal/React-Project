import React from 'react';

const Skills = () => {
    return (
      <section id='Skills' className='container'>
        <div className="header">
            <h1>Skills</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, vel sit voluptatem numquam</p>
        </div>
        <div className="row">
            <div className="card container row">
                <div className="item row-col">
                    <div><span></span></div>
                    <div><h2>HTML</h2></div>
                </div>
                <div className="item row-col">
                    <div><span className='span2'></span></div>
                    <div><h2>CSS</h2></div>
                </div>
                <div className="item row-col">
                   <div><span className='span3'></span></div>
                    <div><h2>JAVASCRIPT</h2></div>
                </div>
                <div className="item row-col">
                    <div><span className='span4'></span></div>
                    <div><h2>REACT.JS</h2></div>
                </div>
                <div className="item row-col">
                    <div><span className='span5'></span></div>
                    <div><h2>JQUERY</h2></div>
                </div>
            </div>

        </div>
      </section>
    );
}

export default Skills;
