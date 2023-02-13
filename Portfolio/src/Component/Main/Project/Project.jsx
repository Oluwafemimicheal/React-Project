import React from 'react'
import ProjectCard from './ProjectCard'
import './Project.css'
import pImage1 from '../image/social-market.png'

const Project = ()=>{ 
    return(
        <div className="project" id='Project'>
            <div className="p-left">
                <span>My Project</span>
                <span>Expand Knowledge</span> 
                <span>Some projects that I've made thus far using my knowledge and ideals while interning!</span>
            </div>
            <div className="p-right">
                <div className="p-card">
                    <ProjectCard image={pImage1} Title='Work Attendance Book' text={"The work attendance book is the place where employees sign in and out for the daily work completed. It also helps to compute the days that employees were present and absent from work and provides an account of employees' salaries at the end of each month."}/>
                </div>
                <div className="p-card">
                    <ProjectCard image={pImage1} Title='Friend Card' text={'Friend Cards enable you to make personal notes about your friends, keep their information in the cloud, and select the type of friend they fall under.'}/>
                </div>
                <div className="p-card">
                    <ProjectCard image={pImage1} Title='Bookstore' text={'This allows you to save all of your favorite books that you want to read online in your own category store on the Did App!'}/>
                </div>
            </div>
        </div>
    )
}
export default Project;