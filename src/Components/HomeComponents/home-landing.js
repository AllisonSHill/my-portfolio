import React from "react"
import { Link } from "react-router-dom"

function HomeLanding() {
    return (
        <div className="home-component">
            <div className="landing-home-component">
                <h6>My name is</h6>
                <h1>Allison Hill</h1>
                <h3>Welcome to my portfolio site!</h3>
                <h2>I'm a Front End Developer</h2>
                <h2>I mostly work in React</h2>
                <Link to="/portfolio">View my Development Portfolio</Link>
            </div>
        </div>
    )
}

export default HomeLanding