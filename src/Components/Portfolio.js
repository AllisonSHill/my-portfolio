import React, { useState, useEffect } from "react"
import PortfolioData from "./PortfolioComponents/PortfolioData"

import PortfolioItem from "./PortfolioComponents/PortfolioItem"


function Portfolio() {

    const [portfolio, setPortfolio] = useState([])
    const [filteredPortfolio, setFilteredPortfolio] = useState([])

    useEffect(() => {
        setPortfolio(PortfolioData)
        allProjects()
    }, [])


    const projects = filteredPortfolio.map(item => <PortfolioItem
        key={item.id}
        name={item.name}
        date={item.date}
        image={item.image}
        description={item.description}
        repository={item.repository}
        link={item.link}
    />)

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
                <div className="portfolio-titles">
                <h1>Portfolio of Projects</h1>
                <h6>Filter by project type:</h6>
                    <div className="portfolio-button-container">
                        <button className="portfolio-button" onClick={() => allProjects()}>All Projects</button>
                        <button className="portfolio-button" onClick={() => filterProjects("react")}>React Projects</button>
                        <button className="portfolio-button" onClick={() => filterProjects("js")}>Javascript Projects</button>
                        <button className="portfolio-button" onClick={() => filterProjects("other")}>Other Projects</button>
                    </div>
                </div>
                <div className="portfolio-container-wrapper">
                <div className="portfolio-container">
                    {projects}
                    </div>
                    </div>
            </div>

        </div>
    )
}

export default Portfolio