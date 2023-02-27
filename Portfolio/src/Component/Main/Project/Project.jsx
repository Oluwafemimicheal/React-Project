import React from 'react'
import ProjectCard from './ProjectCard'
import './Project.css'
import Catering from '../image/Catering Website.png'
import Attendance from '../image/Attendance.png'
import UrlPicker from '../image/Url Picker.png'


const Project = () => {
    return(
        <section className="container" id='Project'>
            <div className="project_container">
                <div className="project_header">
                    <h1>My Project</h1>
                    <h3>Expand Knowledge</h3> 
                    <span>Some projects that I've made thus far using my knowledge and ideals while interning!</span>
                </div>
                <div className="project_cards">
                    <ProjectCard image={Catering} Title='Catering Website' text={"The work attendance book is the place where employees sign in and out for the daily work completed."} Github='https://github.com/Oluwafemimicheal/Portfolio-Project/tree/main/Catering%20Website' Demo='click'
                    />

                    <ProjectCard image={Attendance} Title='Attendance Checkbook' text={'Friend Cards enable you to make personal notes about your friends, keep their information in the cloud, and select the type of friend they fall under.'}   Github='https://github.com/Oluwafemimicheal/Portfolio-Project/tree/main/Attendance' Demo='click'
                    />
                
                    <ProjectCard image={UrlPicker} Title='Chrome Extension/Url-Picker' text={'This allows you to save all of your favorite books that you want to read online in your own category store on the Did App!'} Github='https://github.com/Oluwafemimicheal/Portfolio-Project/tree/main/Url%20Picker' Demo='click'
                        />
                </div>
            </div>
        </section>
    )
}
export default Project;