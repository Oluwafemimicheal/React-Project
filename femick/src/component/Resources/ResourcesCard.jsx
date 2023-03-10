import React from 'react';

const ResourcesCard = ({icon, text, paragraph}) => {
    return (
        <div className="resources-card">
                <i>{icon}</i>
                <h2>{text}</h2>
                <p>{paragraph}</p>
                <a  className='btn-primary' href="#">READ MORE</a>
         </div>
    );
}
export default ResourcesCard;

