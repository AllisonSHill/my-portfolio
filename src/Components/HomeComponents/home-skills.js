import React from "react"
import { Link, Switch, Route } from "react-router-dom"
import ProfeshBio from "./home-skills-files/profesh-bio"

function HomeSkills() {
    return (
        <div className="home-component">
            <Link to="/1"><h2>Who am I?</h2></Link>
            <Switch>
                <Route path=""><ProfeshBio /></Route> //I think this isn't possible what I'm trying to do but I'll come back later.

            </Switch>

            <h2>What can I do?</h2>
            <Link to="/resume">View my resume</Link>
        </div>
    )
}

export default HomeSkills