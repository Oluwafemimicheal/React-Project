import React from 'react';
import './Service.css'
const Card = ({image, text1, text2}) => {
    return (
        <div className='ser-card'>
            <img src={image} alt="Loading..." style={{width: '40%'}}/>
            <span>{text1}</span>
            <span>{text2}</span>
            <button>Learn More!</button>
        </div>
    );
}

export default Card;
