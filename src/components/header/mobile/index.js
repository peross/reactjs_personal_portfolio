import React from 'react'
import './mobile.scss'

function Mobile({isOpen, setIsOpen}){

    const toggle = () => setIsOpen(!isOpen);

    return(
        <div className="mobile">
            <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
                <img className="menu-icon" src={require("../../../assets/apps.svg").default} alt="_blank"/>
            </div>

            <div className="mobile-menu">
                <ul className="nav">
                    <li className="nav-item">
                        <a href="#projects" className="nav-item-link" onClick={toggle}>
                            <img className="menu-icon" src={require("../../../assets/edit.svg").default} alt="_blank"/>Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills"  className="nav-item-link" onClick={toggle}>
                            <img className="menu-icon" src={require("../../../assets/laptop.svg").default} alt="_blank"/>Skills
                        </a>
                    </li>
                    {/*<li className="nav-item">*/}
                    {/*    <a href="#work"  className="nav-item-link" onClick={toggle}>*/}
                    {/*    <i className="fi-rr-briefcase nav-icon"/>Work*/}
                    {/*</a>*/}
                    {/*</li>*/}
                    <li className="nav-item">
                        <a href="#contact"  className="nav-item-link" onClick={toggle}>
                            <img className="menu-icon" src={require("../../../assets/user.svg").default} alt="_blank"/>Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Mobile