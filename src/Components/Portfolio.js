import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import PortfolioData from "./PortfolioComponents/PortfolioData"

function Portfolio() {

    const [portfolio, setPortfolio] = useState([])
    const [filteredPortfolio, setFilteredPortfolio] = useState([])

    useEffect(() => {
        setPortfolio(PortfolioData)
        allProjects()
    }, [])

    const projects = filteredPortfolio.map(item =>
        <div className="portfolio-item" key={item.key}>
            <h2>{item.name}</h2>
            <img className="portfolio-image" src={item.image} />
            <p>{item.description}</p>
            <a href={item.repository} target="blank">Learn More</a>
            <p className="small-text">{item.date}</p>
        </div>
    )

    function filterProjects(type) {
        const filteredProjects = portfolio.filter(item => {
            if (item.type === type)
                return {
                    ...item
                }
            }
        )
        setFilteredPortfolio(filteredProjects)
    }

    function allProjects() {
        setFilteredPortfolio(PortfolioData)
    }

    return (
        <div className="main-content">
            <div className="portfolio-content">
                <Link to="/"><h6>Home</h6></Link>
                <h1>Portfolio</h1>
                <button onClick={() => allProjects()}>All Projects</button>
                <button onClick={() => filterProjects("react")}>React Projects</button>
                <button onClick={() => filterProjects("js")}>Javascript Projects</button>
                <button onClick={() => filterProjects("other")}>Other Projects</button>

                <div className="portfolio-container">
                    {projects}
                </div>
            </div>

        </div>
    )
}

export default Portfolio