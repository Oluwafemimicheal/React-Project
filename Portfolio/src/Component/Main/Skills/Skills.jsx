import React from 'react';
import SkillCard from './SkillCard';
import HTML from '../image/html-5.png'
import CSS from '../image/css-3.png'
import JS from '../image/js.png'
import REACT from '../image/react.png'
import './skills.css'

const Skills = () => {
  return (
    <section id='Skill'>
      <div className="s-header">
          <h1>Skills</h1>
          <span>Internship Training</span>
          <span>This is some of the experience which in have gather for some years to start and to continue my frontend develope skill</span>
      </div>
      <div className="card-con">
        <div className="sk-card" style={{top:'0%', left: '0%'}} >
        <SkillCard image={HTML}  course='HTML is the standard markup language for creating Web pages.'/>
        </div>
        <div className="sk-card" style={{top: '10%',left: '52%'}}>
        <SkillCard image={CSS}  course='CSS is the language we use to style an HTML document'/>
        </div>
        <div className="sk-card"  style={{top: '54%', left: '52%', zIndex: 2}}>
        <SkillCard image={JS} course='JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else'/>
        </div>
        <div className="sk-card"  style={{top: '44%', left: '0%'}}>
        <SkillCard image={REACT}  course="It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript."/>
        </div>
      </div>
    </section>
  );
}

export default Skills;
