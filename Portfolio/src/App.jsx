import React from 'react'
import { Navbar } from './Component/Navbar';
import './App.css'
import { Banner} from './Component/Banner'
import Footer from './Component/Footer';
import Skills from './Component/Main/Skills';
import Project from './Component/Main/Project';
import Experience from './Component/Main/Experience';
import Contact from './Component/Main/Contact';

const App = ()=>{
    return(
        <>
        <Navbar/>
        <Banner/>
        <Skills/>
        <Experience/>
        <Project/>
        <Contact/>
        <Footer/>
        </>
    )
}
export default App;