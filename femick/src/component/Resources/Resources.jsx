import {useState} from 'react';
import './Resources.css'

const Resources = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <section>
            <div className="container resources">
                <div className="resources-header">
                    <nav className='resources-navbar'>
                        <h2>How Our Solution <br/>
                        Can Help You</h2>
                        <ul className='link'>
                            <a href="#" onclick={() => setActiveNav('#')}  className={activeNav === '#' ? 'active' : ' '} >Retail</a>
                            <a href="#about" onclick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}>Travel</a>
                            <a href="#platform" onclick={() => setActiveNav('#home')}  className={activeNav === '#platform' ? 'active' : ''} >Payment</a>
                            <a href="#contact" onclick={() => setActiveNav('#home')}  className={activeNav === '#contact' ? 'active' : ''} >Insurance</a>
                        </ul>
                    </nav>
                    <div className="resources-cards">
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resources;
