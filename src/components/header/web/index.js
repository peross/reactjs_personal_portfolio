import React from 'react'
import './web.scss'

function Web(){
    return(
        <div className="web">
            <ul className="nav">
                <li className="nav-item">
                    <a href="#projects" className="nav-item-link">
                        <img className="menu-icon" src={require("../../../assets/edit.svg").default} alt="_blank"/>Projects
                    </a>
                </li>
                <li>
                    <a href="#skills"  className="nav-item-link">
                        <img className="menu-icon" src={require("../../../assets/laptop.svg").default} alt="_blank"/>Skills
                    </a>
                </li>
                {/*<li><a href="#work"  className="nav-item-link">*/}
                {/*    <i className="fi-rr-briefcase nav-icon"/>Work*/}
                {/*</a>*/}
                {/*</li>*/}
                <li>
                    <a href="#contact"  className="nav-item-link">
                        <img className="menu-icon" src={require("../../../assets/user.svg").default} alt="_blank"/>Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Web