import React from 'react'
import ProjectCard from './ProjectCard'
import './Project.css'
import Catering from '../image/Catering Website.png'
import Attendance from '../image/Attendance.png'
import UrlPicker from '../image/Url Picker.png'
import Message from '../massage/message';

const Project = ()=>{ 
    const[ megPop, setMegPop] = useState(false)
    return(
        <div className="project" id='Project'>
            <div className="p-left">
                <span>My Project</span>
                <span>Expand Knowledge</span> 
                <span>Some projects that I've made thus far using my knowledge and ideals while interning!</span>
            </div>
            <div className="p-right">
                <div className="p-card">
                    <ProjectCard image={Catering} Title='Catering Website' text={"The work attendance book is the place where employees sign in and out for the daily work completed."}/>
                </div>
                <div className="p-card">
                    <ProjectCard image={Attendance} Title='Attendance Checkbook' text={'Friend Cards enable you to make personal notes about your friends, keep their information in the cloud, and select the type of friend they fall under.'}/>
                </div>
                <div className="p-card">
                    <ProjectCard image={UrlPicker} Title='Chrome Extension/Url-Picker' text={'This allows you to save all of your favorite books that you want to read online in your own category store on the Did App!'}/>
                </div>
            </div>
            <Message trigger={megPop}>
                <FaWhatsapp style={{fontSize: 50, color: 'green'}}/>
                <button className='remove' onClick={()=> setMegPop(false)}><FaTimes/></button>
                <p>Hy, Friend let start chatting!</p>
                <h1>09163657267</h1>
                <button className='button'>Let's Chat</button>
            </Message>
        </div>
    )
}
export default Project;