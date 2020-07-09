import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

function PortfolioItem(props) {
    const [showDescription, setShowDescription] = useState(false)
    const descriptionClass = showDescription ? "show" : "hide"

    const arrow = showDescription ? 
        < FontAwesomeIcon icon={faCaretUp} className="portfolio-arrow" onClick={() => { setShowDescription(!showDescription) }} /> :
        < FontAwesomeIcon icon={faCaretDown} className="portfolio-arrow" onClick={() => { setShowDescription(!showDescription) }} />

    return (
        <div className="portfolio-item" key={props.id}>
            <h2>{props.name}</h2>
            <p className="small-text">{props.date}</p>
            <img className="portfolio-image" src={props.image} /> <br/>
            {arrow}
            <div id="portfolio-description-container" className={descriptionClass}>
                <p>{props.description}</p>
                <a href={props.repository} target="blank">Github</a>
            </div>
        </div>
    )
}

export default PortfolioItem
