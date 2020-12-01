import React, { useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import climbingPic from "../Images/unaweep.JPG"


function Contact() {

    return (
        <div className="main-content" id="contact">
            <h1>Contact Me</h1>
            <div className="contact">
                <div className="contact-picture">
                    <img className="climbing-picture-img" src={climbingPic} />
                </div>
                <div className="contact-container">
                    <p><FontAwesomeIcon icon={faEnvelope} /> 
                    allison.m.s.hill@gmail.com</p>
                </div>
            </div>
                

        </div>
    )
}

export default Contact