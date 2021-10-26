import React from "react";
import './skills.scss';
import Separator from "../../common/separator";
import {skillsData} from "../../../data/skills";
import SkillCard from "./skill-card";

function Skills() {

    const data = skillsData;

    return(
        <div className="skills">
            <Separator/>
            <h1 className="section-title">Skills</h1>
            <div className="skills-container">
                {data.map((item) => {
                    return(
                        <div className="skills-section">
                            <h3 className="skills-section-title">{item.type}</h3>
                            <div className="skills-list">
                                {item.list.map((skill)=>{
                                    return(
                                        <SkillCard skill={skill}/>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills;