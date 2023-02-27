import React from 'react';
import './Service.css'
const Card = ({image, text1, text2}) => {
    return (
        <div className='service-card'>
            <img src={image} alt="Loading..." style={{width: '40%'}}/>
            <h3>{text1}</h3>
            <p>{text2}</p>
            <a href='contact'>Learn More!</a>
        </div>
    );
}

export default Card;
