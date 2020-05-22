import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import PortfolioData from "./PortfolioComponents/PortfolioData"
import ManagementPortalThumb from "../Images/ManagementPortalThumb.jpg"


function Portfolio() {

    const [portfolio, setPortfolio] = useState([])

    useEffect(() => {
        setPortfolio(PortfolioData)
    }, [])

    const portfolioItems = portfolio.map(item =>
        <div className="portfolio-item">
            <h2 key={item.key}>{item.name}</h2>
            <img src={item.image} />
            <p>{item.description}</p>
            <a href={item.repository} target="blank">Learn More</a>
            <p className="small-text">{item.date}</p>
        </div>
    )

    return (
        <div className="main-content">
            <h1>Portfolio</h1>
            <Link to="/portfolio/react">React Projects</Link>
            <Link to="/portfolio/javascript">Javascript Projects</Link>
            <Link to="/portfolio/other">Other Projects</Link>

            <div className="portfolio-container">
                <img src={ManagementPortalThumb}/>
                {portfolioItems}
            </div>

        </div>
    )
}

export default Portfolio