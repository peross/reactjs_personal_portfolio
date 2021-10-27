import React from 'react'
import './web.scss'

function Web(){
    return(
        <div className="web">
            <ul className="nav">
                <li className="nav-item">
                    <a href="#projects" className="nav-item-link">
                        <i className="fi-rr-edit-alt nav-icon"/>Projects
                    </a>
                </li>
                <li>
                    <a href="#skills"  className="nav-item-link">
                        <i className="fi-rr-laptop nav-icon"/>Skills
                    </a>
                </li>
                {/*<li><a href="#work"  className="nav-item-link">*/}
                {/*    <i className="fi-rr-briefcase nav-icon"/>Work*/}
                {/*</a>*/}
                {/*</li>*/}
                <li>
                    <a href="#contact"  className="nav-item-link">
                        <i className="fi-rr-user nav-icon"/>Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Web