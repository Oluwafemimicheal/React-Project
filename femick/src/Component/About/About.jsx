import React from "react";
import aboutPic from '../../assets/image/About SVG.jpg'
import './about.css'

 const About = ()=>{
    return(
        <section className="about-con">
            <div className="container">
            <div className="about">
                <div className="text">
                    <h1>About Us</h1>
                    <h3>Graphics & UI/UX Designs</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro laudantium, veritatis fuga et, iusto, tempora voluptatum ratione nobis qui impedit illo facere exercitationem omnis enim. Quia enim pariatur neque.</p>
                    <button type="button">Learn More!</button>
                </div>
                <div className="image">
                    <img src={aboutPic} alt=""/>
                </div>
            </div>  
            </div>
        </section>
    )
 }
 export default About;