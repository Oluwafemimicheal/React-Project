import React from 'react'
import { Navbar } from './Component/Navbar/Navbar';
import './App.css'
import Banner from './Component/Banner/Banner'
import Footer from './Component/Footer';
import Contact from './Component/Main/Contact';
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
        <Service/>
        <Skill/>
        <Project/>
        <Contact/>
        <Footer/>
        </>
    )
}
export default App;