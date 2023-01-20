import React from 'react';
import './Project.css'
const ProjectCard = ({image,Title,text}) => {
    return (
        <div>
            <div className="p-image">
            <img src={image} alt="Loading..." style={{width: '80%'}}/>
            </div>
            <div className="p-detail">
            <span>{Title}</span>
            <span>{text}</span>
            </div>
        </div>
    );
}

export default ProjectCard;