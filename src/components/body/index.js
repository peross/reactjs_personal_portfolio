import React from 'react'
import './body.scss'
import Hero from "./hero";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";

function Body(){
    return(
        <div className="body">
            <section id="hero">
                <Hero/>
            </section>
            <section id="projects">
                <Projects/>
            </section>
            <section id="skills">
                <Skills/>
            </section>
            <section id="contact">
                <Contact/>
            </section>
        </div>
    )
}

export default Body