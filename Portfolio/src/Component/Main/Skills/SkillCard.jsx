import React from 'react'
import './skills.css'

const SkillCard = ({image, course}) => {
    return (
        <div>
            <img src={image} alt="" />
            <span>{course}</span>
        </div>
    )
}
export default SkillCard;