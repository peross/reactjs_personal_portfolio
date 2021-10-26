import React from "react";
import './contact.scss';
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";

function Contact() {
    return(
        <div className="contact">
            <Separator/>
            <h3 className="section-title">Contact</h3>
            <div className="contact-container">
                <div className="contact-left-side">
                    <p>Want to get in touch? Contact me on any of the platform</p>
                    <SocialContact/>
                </div>
                <div className="contact-right-side">
                    <a download href={require('../../../assets/resume.pdf').default}>
                        <i className="fi-rr-cloud-download download-icon"/>
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact