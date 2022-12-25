import React from 'react';
import * as Icon from 'react-bootstrap-icons'

export const Navbar = () => {

    return (
       <div className="Navbar-container">
            <div className="container">
                <div className="row">
                    <div className="logo">
                            <Icon.Person style={{fontSize: 35, color:'steelblue'}}/>
                    </div>
                    <ul className={{innerWidth: 600 ? '': ''}}>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Skills">Skills</a></li>
                        <li><a href="#Experience">Experience</a></li>
                        <li><a href="#Project">Project</a></li>
                        <li><a href="#Contact">Contact</a></li>
                        <button>Connect</button>
                        <div>
                        <Icon.BarChartFill/>
                        </div>
                    </ul>
                </div>
            </div>
       </div>
    );
}
