import React from 'react';
import './Project.css'

const ProjectCard = ({image,Title,text,Github}) => {
    return (
        <div className='project_card'>
            <div className="p-image">
            <img src={image} alt="Loading..." style={{width: '100%'}}/>
            </div>
            <div className="project_detail">
                <h3>{Title}</h3>
                <p>{text}</p>
                <a href={Github}>Github</a>
            </div>
        </div>
    );
}

export default ProjectCard;