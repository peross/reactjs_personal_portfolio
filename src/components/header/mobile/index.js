import React from 'react'
import './mobile.scss'

function Mobile({isOpen, setIsOpen}){

    const toggle = () => setIsOpen(!isOpen);

    return(
        <div className="mobile">
            <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
                <i className="fi-rr-cross-circle"/>
            </div>

            <div className="mobile-menu">
                <ul className="nav">
                    <li className="nav-item">
                        <a href="#projects" className="nav-item-link" onClick={toggle}>
                            <i className="fi-rr-edit-alt nav-icon"/>Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills"  className="nav-item-link" onClick={toggle}>
                            <i className="fi-rr-laptop nav-icon"/>Skills
                        </a>
                    </li>
                    {/*<li className="nav-item">*/}
                    {/*    <a href="#work"  className="nav-item-link" onClick={toggle}>*/}
                    {/*    <i className="fi-rr-briefcase nav-icon"/>Work*/}
                    {/*</a>*/}
                    {/*</li>*/}
                    <li className="nav-item">
                        <a href="#contact"  className="nav-item-link" onClick={toggle}>
                            <i className="fi-rr-user nav-icon"/>Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Mobile