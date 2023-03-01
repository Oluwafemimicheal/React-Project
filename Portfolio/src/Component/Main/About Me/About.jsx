import React from "react";
import Self from '../image/Self.png'
import './About.css'

const About = ()=>{
    return(
      <section id="About" className="container">
        <div className="about_container">
          <div className="image">
              <div className="box">
              <img src={Self} alt="Loading" style={{width: '60%'}}/>
              <span></span>
              </div>
          </div>
          <div className="About-detail">
              <h1>About Me</h1>
              <span>Frontend Dev/Graphics Designer!</span>
              <p>Hello! My name is Oluwafemi and i enjoy creating things that live on the internet. 
              My interest in web development started back in 2019 when i decided to try editing 
              some site which taught me a lot about HTML & CSS!Fast-forward today, i have try improving 
              my self learning more about HTML5, CSS3 & JAVASCRIPT and also trying them to create some Landing-page, My-Portfolio and a full-Website. My main focus right now is to find my self in an organization
              that can help me grow more effectively in my skills.
              I also recently learning Javascript and React.js to improve my front-end 
              skills in web-development</p>
              <button className="btn">More About</button>
          </div>
        </div>
      </section>
    )
}

export default About;