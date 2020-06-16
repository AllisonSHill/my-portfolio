import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import PortfolioData from "./PortfolioComponents/PortfolioData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'



function Portfolio() {

    const [portfolio, setPortfolio] = useState([])
    const [filteredPortfolio, setFilteredPortfolio] = useState([])
    const [showDescription, setShowDescription] = useState([])

    useEffect(() => {
        setPortfolio(PortfolioData)
        allProjects()
    }, [])

    const descriptionClass = showDescription ? "show" : "hide" //have to make this for the individual item

    const projects = filteredPortfolio.map(item =>
        <div className="portfolio-item" key={item.id}>
            <h2>{item.name}</h2>
            <p className="small-text">{item.date}</p>
            <img className="portfolio-image" src={item.image} />

            <FontAwesomeIcon icon={faCaretUp} onClick={() => { toggleDescriptionClass(item.id) }} />
            <FontAwesomeIcon icon={faCaretDown} onClick={() => { toggleDescriptionClass(item.id) }} />


            <div id="portfolio-description-container" className={descriptionClass}>
                <p>{item.description}</p>
                <a href={item.repository} target="blank">Github</a>
            </div>
        </div>
    )

    function toggleDescriptionClass(id) { //Also individual item problems. Can see the console log!! wtf.
        const projectsWithDescriptions = portfolio.map(item => {
            if (item.id === id) {
                console.log(item.id.descriptionClass + "toggled")
                setShowDescription(!showDescription)
            }
        }
        )
    }

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
                <h1>My Coding Portfolio</h1>
                <h6>Filter by project type:</h6>
                <button className="portfolio-button" onClick={() => allProjects()}>All Projects</button>
                <button className="portfolio-button" onClick={() => filterProjects("react")}>React Projects</button>
                <button className="portfolio-button" onClick={() => filterProjects("js")}>Javascript Projects</button>
                <button className="portfolio-button" onClick={() => filterProjects("other")}>Other Projects</button>

                <div className="portfolio-container">
                    {projects}
                </div>
            </div>

        </div>
    )
}

export default Portfolio