import React from "react"
import { Link } from "react-router-dom"

function HomePortfolio() {
    return (
        <div className="home-component">
            <div className="portfolio-home-component">
                <h2>Portfolio Highlights:</h2>
                <div className="portfolio-highlight">
                    <div className="portfolio-highlight-effect">
                    </div>
                    </div>
                </div>

                <Link to="/portfolio"><h5>View my Full Portfolio</h5></Link>
            </div>

                
    )
}

export default HomePortfolio