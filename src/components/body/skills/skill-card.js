import React from "react";
import './skill-card.scss';

function SkillCard({skill}){
    return(
        <div className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
        </div>
    )
}

export default SkillCard;