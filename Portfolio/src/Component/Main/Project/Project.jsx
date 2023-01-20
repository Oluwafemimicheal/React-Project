import React from 'react'
import ProjectCard from './ProjectCard'
import './Project.css'
import pImage1 from '../image/social-market.png'

const Project = ()=>{
    return(
        <div className="project">
            <div className="p-left">
                <span>My Project</span>
                <span>Expand Knowledge</span>
                <span>Some Project which i have built so far with my ideal and Knowledge, while on internship! </span>
            </div>
            <div className="p-right">
            <div className="color"></div>
            <div className="p-card">
                <ProjectCard image={pImage1} Title='Work Attendance Book' text={'Work Attendance book is where the staff sign-in and sign out for the daily work been done and also it help to calculate the day the staff was present and absent at work also give the account of the staff salary at the end of every month!'}/>
            </div>
            <div className="p-card">
                <ProjectCard image={pImage1} Title='Friend Card' text={'friend Card help you to save your friend details on cloud and to write some things special about your friend and also choose the category of friend that He/She is, among your friends!'}/>
            </div>
            </div>
        </div>
    )
}
export default Project;