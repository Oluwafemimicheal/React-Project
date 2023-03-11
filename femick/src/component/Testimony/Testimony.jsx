import React from 'react';
import './Testimony.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import TestimonyCard from './TestimonyCard';


const Testimony = () => {
    return (
        <section className='testimony'>
            <div className="container">
                <div className="testimony-header">
                    <h2>Trusted by Global Companies</h2>
                    <span>
                        <h2>1/6</h2>
                        <span>
                        <FaArrowLeft className='icon'/>
                        <FaArrowRight className='icon' />
                        </span>
                    </span>
                </div>
                <div className="testimony-container">
                    <div className="testimony-box">
                        <div>
                        <TestimonyCard 
                        image={''} 
                        text={'This product is the best product i have never experience for some years now, in others words they are the best of all if i may say because this product as really help me in doing a lot of things on my own and have improve my joy so far!'} 
                        userName={'Micheal Oluwafemi CEO'}
                        />
                        </div>
                        <div>
                        <TestimonyCard 
                        image={''} 
                        text={'This product is the best product i have never experience for some years now, in others words they are the best of all if i may say because this product as really help me in doing a lot of things on my own and have improve my joy so far!'} 
                        userName={'Oluwafemi CEO'}
                        />
                        </div>
                        <div>
                        <TestimonyCard 
                        image={''} 
                        text={'This product is the best product i have never experience for some years now, in others words they are the best of all if i may say because this product as really help me in doing a lot of things on my own and have improve my joy so far!'} 
                        userName={'Micheal CEO'}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimony;
