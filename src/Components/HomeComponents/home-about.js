import React from "react"
import { Link } from "react-router-dom"

function HomeAbout() {
    return (
        <div className="home-component">
            <h1>Allison Hill</h1>
            <h2>I do a lot of stuff that isn't write code, too. </h2>
            <h4>Like rock climbing</h4>
            <h4>And mountain climbing.</h4>
            <h4>And having super cool pets.</h4>
            <Link to="/about"><h3>About Me</h3></Link>
        </div>
    )
}

export default HomeAbout