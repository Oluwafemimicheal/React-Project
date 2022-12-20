import {Link} from "react-router-dom";
import Robot from './images/Robot.jpg'
import './error.css'

const Error = ()=>{
    return(
        <>
        <div className="error-container">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <img src={Robot} alt="Loading" />
            <p>This page is not part of the HTTP server; please return to the home page for more important information on this website, or perhaps there is a word missing from the link entered in the URL box.!</p>
            <Link to='/'>Back to Home!</Link>
        </div>  
        </>
    )
}
export default Error;