import React from 'react';

 export const Cards = ({text, paragraph, icon}) => {
    return (
        <div className='card'>
             <h3>{text}</h3>
                    <p>{paragraph}</p>
                    <span>
                        <i>{icon}</i>
                        <div className="image"></div>
                    </span>
                    <a  className='btn btn-link' href="home">READ MORE</a>
        </div>
    );
}

