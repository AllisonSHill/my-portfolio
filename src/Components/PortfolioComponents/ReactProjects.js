import React from "react"
import { Link } from "react-router-dom"

function ReactProjects() {
    return (
        <div className="portfolio-content">
            <h1>React Projects</h1>
            <Link to="/portfolio">All Projects</Link>
            <Link to="/portfolio/javascript">Javascript Projects</Link>
            <Link to="/portfolio/other">Other Projects</Link>
        </div>
    )
}

export default ReactProjects