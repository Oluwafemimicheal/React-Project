import React from 'react'
import Navbar from './Component/Navbar/Navbar';
import Banner from './Component/Banner/Banner'
import Footer from './Component/Footer/Footer';
import Contact from './Component/Contact/Contact';
import Service from './Component/Main/Service/Service';
import About from './Component/Main/About Me/About';
import Skill from './Component/Main/Skills/Skills'
import Project from './Component/Main/Project/Project';

const App = ()=>{
    return(
        <>
        <Navbar/>
        <Banner/>
        <About/>
        <Skill/>
        <Service/>
        <Project/>
        <Contact/>
        <Footer/>
        </>
    )
}
export default App;