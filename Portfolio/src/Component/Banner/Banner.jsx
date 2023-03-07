import React, {useState} from 'react';
import {ArrowDown} from 'react-bootstrap-icons'
import './Banner.css'
import Message from '../massage/message';
import{FaWhatsapp, FaTimes, FaCode} from 'react-icons/fa'
import {motion} from 'framer-motion'


const Banner = () => {
    const transition = {duration:1, type: 'spring'}
    const[ megPop, setMegPop] = useState(false)
    return (
        <section id='Home' className='container'>
            <span className='span'></span>
                <div className="banner_container">
                        <motion.div
                            initial={{left:'-30%'}}
                            whileInView={{left: '-10%'}}
                            transition={transition}
                            className="detail">
                            <h3>Hello, I'M</h3>
                            <h1>OLUWAFEMI <br/> MICHEAL</h1>
                            <h2>FRONTEND DEV</h2>
                            <p>I'm a Front-end developer, specializing in building 
                            (and occasionally designing), I enjoy creating things that live on the internet</p>
                            <button className='btn btn-banner' onClick={()=> setMegPop(true)}>Let's Connect <ArrowDown style={{fontSize:15}}/></button>
                        </motion.div>
                        <FaCode className='icon'/>
                        
                </div>
            <Message trigger={megPop}>
                <FaWhatsapp style={{fontSize: 50, color: 'green'}}/>
                <i className='remove' onClick={()=> setMegPop(false)}><FaTimes/></i>
                <p>Hy, Friend let start chatting!</p>
                <a href="https://wa.me/+2349163657267" target='_blank' rel="noreferrer"className='btn' > Let's Chat &#8594;</a>
            </Message>
        </section>
    );
}
export default Banner;