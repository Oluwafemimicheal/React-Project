import React from 'react';
import './Project.css'

const ProjectCard = ({image,Title,text,Github,Demo}) => {
    return (
        <div className='project_card'>
            <div className="p-image">
            <img src={image} alt="Loading..." style={{width: '100%'}}/>
            </div>
            <div className="p-detail">
                <h3>{Title}</h3>
                <p>{text}</p>
                <div className="btn_container">
                    <a href={Github} className='btn_primary'>Github</a>
                    <a href={Demo} className='btn_primary'>Demo</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;