import React from 'react';

const TestimonyCard = ({image, text, userName}) => {
    return (
        <span className='testimony-card'>
            <img src={image} alt="Image" className='user'/>
            <article>
                <p>{text}</p>
                <small>{userName}</small>
            </article>
        </span>
    );
}

export default TestimonyCard;
