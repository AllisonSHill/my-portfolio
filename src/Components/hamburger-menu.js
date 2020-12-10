import React from "react"
import { Link } from "react-router-dom"

function HamburgerMenu({ hidden }) {
    let visibility = "show";

    if (hidden) {
        visibility = "hide";
    }

    return (
        <div id="hamburger-menu" className={visibility}>
            <div id="hamburger-menu-content">
                <h1>Menu!</h1>
                <ul>
                    <li><Link to="/my-portfolio">Home</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/skills">Skills and Resume</Link></li>
                    <li><Link to="/about">About and Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default HamburgerMenu