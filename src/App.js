import React, { useState } from 'react'
import './App.css'
import { Link, Switch, Route } from "react-router-dom"

import HamburgerMenu from "./Components/hamburger-menu"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import Home from "./Components/Home"
import Portfolio from "./Components/Portfolio"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Contact from "./Components/Contact"
import Recipe from "./Components/MiscComponents/Recipe"



function App() {
    const [hidden, setHidden] = useState(true)

    const MenuButton = hidden ? <FontAwesomeIcon icon={faBars} className="hamburger" onClick={() => { setHidden(!hidden) }} /> :
        <FontAwesomeIcon icon={faTimes} className="closeMenu" onClick={() => {setHidden(!hidden)}} />

    return (
        <div className="App">
            <HamburgerMenu hidden={hidden} />
            <div className="button-menu">
                {MenuButton}
                <Link to="/"><FontAwesomeIcon icon={faHome} className="homeButton" /></Link>
            </div>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/portfolio"><Portfolio /></Route>
                <Route exact path="/about"><About /></Route>
                <Route exact path="/skills"><Skills /></Route>
                <Route exact path="/contact"><Contact /></Route>
                <Route exact path="/recipes"><Recipe /></Route>
            </Switch>
        </div>
    );
}

export default App;
