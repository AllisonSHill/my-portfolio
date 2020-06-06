import React from "react"
import {Link} from "react-router-dom"

function HomeComponentOne() {
    return (
        <div className="home-component">
            <h1>Allison Hill</h1>
            <h2>React and Javascript Developer</h2>
            <Link to="/portfolio"><h3>View My Portfolio</h3></Link>
            <Link to="/about"><h3>About Me</h3></Link>
        </div>
        )
}

export default HomeComponentOne