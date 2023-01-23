import React from "react";
import Card from "./Card";
import Resume from '../image/Online Cv.docx'
import Code from '../image/code.png'
import Social from '../image/social-market.png'
import Graphics from '../image/graphics.png'
import './Service.css'

const Service = () =>{
    return(
        <div className="service" id='Service'>
            <div className="s-left">
                <span>My Awesome</span>
                <span>Service</span>
                <span>These are some of the services I provide to clients worldwide, including both office work and online work.</span>
                <button><a href={Resume}>Download CV</a></button>
            </div>
            <div className="s-right">
                <div className="color"></div>
                <div className="s-card">
                <Card 
                image={Graphics} 
                text1={'GRAPHICS DESIGN'} 
                text2={'Coral draw, Photoshop, Adobe-illustrator'}/>
                </div>
                <div className="s-card">
                <Card image={Code} text1={'FRONTEND DEV'} text2={'Html, Css 3, Javascript, React.js, Bootstrap 5'}/>
                </div>
                <div className="s-card">
                <Card image={Social} text1={'SOCIAL-MEDIA ADS'} text2={'Facebook,Instagram, WhatApp, Youtube'}/>
                </div>
            </div>
        </div>
    )
}

export default Service;