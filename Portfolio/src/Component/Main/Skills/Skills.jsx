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
      <div className="skill-container">
        <div className="skill-header">
            <h1>Skills</h1>
            <span>Internship Training</span>
            <span>This is part of the experience I've gained over the years in order to begin and continue developing my frontend skills.</span>
        </div>
        <div className="skill_cards">
          <div className="skill_card" >
          <SkillCard image={HTML}/>
          </div>
          <div className="skill_card">
          <SkillCard image={CSS}/>
          </div>
          <div className="skill_card">
          <SkillCard image={JS}/>
          </div>
          <div className="skill_card">
          <SkillCard image={REACT}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
