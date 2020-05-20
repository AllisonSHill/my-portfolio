import React from "react"
import { Link } from "react-router-dom"

function JavascriptProjects() {
    return (
        <div className="portfolio-content">
            <h1>JS Projects</h1>
            <Link to="/portfolio">All Projects</Link>
            <Link to="/portfolio/react">React Projects</Link>
            <Link to="/portfolio/other">Other Projects</Link>
        </div>
    )
}

export default JavascriptProjects