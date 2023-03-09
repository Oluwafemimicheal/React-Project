import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css'
const Home = () => {
    return (
        <div className='Home'>
                        <Navbar/>
            <div className="container">
                <div className="home-container">
                    <div>
                        <article>
                            <h3>What is Femicklization?</h3>
                            <h1>The Future of Cyber <br/> Security is Here</h1>
                            <div className='details'> 
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nihil provident non exercitationem, distinctio illo ea maxime magni molestias, dolore voluptatum quis error aperiam alias unde ex fugit, dolores sunt!</p>
                                <div className='buttons'>
                                <a className='btn btn-primary' href="">SEE MORE</a>
                                <a className='btn' href="">DOWNLOAD RESOURCES</a>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className='image'>
                        <span></span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;
