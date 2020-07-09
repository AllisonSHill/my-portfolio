import React from "react"
import {Link} from "react-router-dom"

function Resume() {
    return (
        <div className="skills-option">
            <h2>What can I do?</h2>
            <Link to="/skills">View my resume</Link>
        </div>
    )
}

export default Resume