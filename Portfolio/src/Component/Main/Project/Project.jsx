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
                    <p>Some projects that I've made thus far using my knowledge and ideals while interning!</p>
                </div>
                <div className="project_cards">
                    <ProjectCard image={Catering} Title='Catering Website' text={"The work attendance book is the place where employees."} Github='https://github.com/Oluwafemimicheal/Portfolio-Project/tree/main/Catering%20Website'
                    />

                    <ProjectCard image={Attendance} Title='Attendance Checkbook' text={'Friend Cards enable you to make personal notes about your friends.'}   Github='https://github.com/Oluwafemimicheal/Portfolio-Project/tree/main/Attendance'
                    />
                
                <div></div>
                    <ProjectCard image={UrlPicker} Title='Chrome Extension/Url-Picker' text={'This allows you to save all of your favorite books.'} Github='https://github.com/Oluwafemimicheal/Portfolio-Project/tree/main/Url%20Picker'
                        />

                </div>
            </div>
        </section>
    )
}
export default Project;