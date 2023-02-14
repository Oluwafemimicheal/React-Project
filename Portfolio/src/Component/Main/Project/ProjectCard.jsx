import React from 'react';
import './Project.css'

const ProjectCard = ({image,Title,text,Github,Demo}) => {
    return (
        <div className='projectCard'>
            <div className="p-image">
            <img src={image} alt="Loading..." style={{width: '80%'}}/>
            </div>
            <div className="p-detail">
            <span>{Title}</span>
            <span>{text}</span>
            </div>
            <div className="btn">
              <a href={Github}>Github</a>
              <a href={Demo}>Demo</a>
            </div>
        </div>
    );
}

export default ProjectCard;