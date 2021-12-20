import React from "react";
import './project-card.scss';

function ProjectCard({project}) {
    return(
        <div className="project-card">
            <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                    {project.demo && (
                        <a className="project-link" href={project.demo} target="_blank" rel="noreferrer">
                        <div className="link-btn">
                            <i className="fi fi-rr-globe"/>Demo
                        </div>
                    </a>
                    )}

                    {project.github && (
                        <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                            <div className="link-btn">
                                <i className="devicon-github-original colored"/>Github
                            </div>
                        </a>
                    )}
                </div>
                <p>{project.about}</p>
                <div className="project-tags">
                    {project.tags.map(tag => {
                        return(
                            <p className="tag">{tag}</p>
                        )
                    })}
                </div>
            </div>
            <img src={project.image} className="project-photo" alt="_blank"/>
        </div>
    )
}

export default ProjectCard;