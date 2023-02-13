import React from 'react';
import './Project.css'
const ProjectCard = ({image,Title,text}) => {
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
                <button>Github</button>
                <button>Demo</button>
            </div>
        </div>
    );
}

export default ProjectCard;