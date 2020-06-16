import React from "react"
import { Link } from "react-router-dom"

function HomeRecipes() {
    return (
        <div className="home-component">
            <h1>I also cook a lot!</h1>
            <h2>Here's some recipes if anyone cares:</h2>
            <Link to="/recipes"><h3>Recipes 100% by me</h3></Link>
        </div>
    )
}

export default HomeRecipes