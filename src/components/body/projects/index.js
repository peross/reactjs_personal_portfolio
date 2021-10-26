import React from "react";
import './projects.scss';
import {projectData} from "../../../data/projects";
import ProjectCard from "./project-card";
import Separator from "../../common/separator";

function Projects() {

    const data = projectData;

    return(
        <div className="projects">
            <Separator/>
            <h1 className="setion-title">Projects</h1>
            <div>
                {data.map(project=>{
                    return <ProjectCard project={project}/>
                })}
            </div>
        </div>
    )
}

export default Projects;