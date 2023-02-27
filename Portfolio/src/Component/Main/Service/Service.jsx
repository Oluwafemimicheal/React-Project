import React from "react";
import Card from "./Card";
import Resume from '../image/Online Cv.docx'
import Code from '../image/code.png'
import Social from '../image/social-market.png'
import Graphics from '../image/graphics.png'
import './Service.css'

const Service = () =>{
    return(
        <section className="container" id='Service'>
            <div className="service_container">
                <div className="service_header">
                    <h1>My Awesome</h1>
                    <h2>Service</h2>
                    <p>These are some of the services I provide to clients worldwide, including both office work and online work.</p>
                    <a href={Resume} className="btn_primary">Download CV</a>
                </div>
                <div className="service_cards">
                    <Card 
                    image={Graphics} 
                    text1={'GRAPHICS DESIGN'} 
                    text2={'Coral draw, Photoshop, Adobe-illustrator'}/>
                    <Card 
                    image={Code} 
                    text1={'FRONTEND DEV'} 
                    text2={'Html, Css 3, Javascript, React.js, Bootstrap 5'}/>
                    <div></div>
                    <Card 
                    image={Social} 
                    text1={'SOCIAL-MEDIA ADS'} 
                    text2={'Facebook,Instagram, WhatApp, Youtube'}/>
                </div>
            </div>
        </section>
    )
}

export default Service;