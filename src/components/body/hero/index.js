import React from "react"
import './hero.scss'
import Social from "../../common/social-contact";

function Hero(){
    return(
        <div className="hero">
            <div className="hero-top">
                <div className="hero-top-info">
                    Hi there🤗👋, I am <br/>
                    <span className="hero-top-info-name">Pero Soldat</span>. <br/>
                    I love experimenting with the web.
                </div>
                <div className="hero-top-photo">
                    <img src={require('../../../assets/coding.svg').default} alt="_blank" className="hero-img"/>
                </div>
            </div>
            <Social/>
        </div>
    )
}

export default Hero