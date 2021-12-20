import React from "react";
import "./social.scss";
import {socialData} from '../../../data/social';

function SocialContact() {

    const data = socialData;

    return(
        <div className="social-contact">
            {data.map(item=>{
                return(
                    <a href={item.link} target="_blank" rel="noreferrer">
                        <div className="social-icon-div">
                            <img src={item.icon} className="social-icon" alt="_blank"/>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default SocialContact;