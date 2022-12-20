import {Link} from 'react-router-dom'
import './home.css'
const Home = () => {
    return (
    <>
    <div className="container-home">
        <div className="Navbar">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='footer'>Contact</Link></li>
            </ul>
        </div>
    </div>
    </>
    )
}
export default Home;