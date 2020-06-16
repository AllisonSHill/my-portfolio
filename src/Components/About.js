import React from "react"
import {Link} from "react-router-dom"
import meNoGlasses from "../Images/meNoGlasses.jpg"

function About() {
    return (
        <div className="main-content">
            <Link to="/"><h6>Home</h6></Link>
            <h1>About</h1>
            <div className="bio-wrapper">
                <img className="bio-image" src={meNoGlasses}/>
                <p>
                    This is the page where I tell you things about myself that aren't on my resume. 
                    <br />
                    I climb rocks.
                    <br />
                    I climb mountains.
                    <br />
                    I cook stuff. There's a whole separate page for the stuff I cook <Link to="/recipes">here</Link>.
                    <br />
                    
                </p>
            </div>
        </div>
    )
}

export default About