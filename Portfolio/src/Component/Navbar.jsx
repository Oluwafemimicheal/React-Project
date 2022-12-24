import React from 'react';

export const Navbar = () => {

    return (
       <div className="Navbar-container">
            <div className="container">
                <div className="row">
                    <div className="logo">
                            <h1>Logo</h1>
                    </div>
                    <ul className='navbar'>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Skills">Skills</a></li>
                        <li><a href="#Experience">Experience</a></li>
                        <li><a href="#Project">Project</a></li>
                        <li><a href="#Contact">Contact</a></li>
                        <button>Connect</button>
                    </ul>
                </div>
            </div>
       </div>
    );
}
