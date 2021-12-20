import React, {useState} from 'react'
import './header.scss'
import logo from '../../logo.svg'
import Web from "./web";
import Mobile from "./mobile";

function Header(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="header">
            <a href="#hero"><img src={logo} alt="_blank" className="logo"/></a>
            <div className="menu">
                <div className="menu-web">
                    <Web/>
                </div>
                <div className="menu-mobile">
                    <div onClick={() => setIsOpen(!isOpen)}> {/*opposite of isOpen*/}
                        <img className="menu-icon" src={require("../../assets/apps.svg").default} alt="_blank"/>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>} {/*only when isOpen true show Mobile*/}
                </div>
            </div>
        </div>
    )
}

export default Header