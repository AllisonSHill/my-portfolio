import React from "react"
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <div>
                <Link to="/">Allison Hill</Link>
            </div>
            <div className="nav-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
            <div>
                <a href="mailto:allison.m.s.hill@gmail.com" target="blank">Email</a>
            </div>
        </div>
    )
}

export default Header
