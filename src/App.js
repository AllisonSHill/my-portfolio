import React from 'react'
import './App.css'
import { Switch, Route } from "react-router-dom"

import Header from "./Header"
import Home from "./Components/Home"
import Portfolio from "./Components/Portfolio"
import About from "./Components/About"

import ReactProjects from "./Components/PortfolioComponents/ReactProjects"
import JavascriptProjects from "./Components/PortfolioComponents/JavascriptProjects"
import OtherProjects from "./Components/PortfolioComponents/JavascriptProjects"


function App() {
  return (
      <div className="App">
          <Header />
          <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/portfolio"><Portfolio /></Route>
              <Route exact path="/about"><About /></Route>
              <Route path="/portfolio/react"><ReactProjects /></Route>
              <Route path="/portfolio/javascript"><JavascriptProjects /></Route>
              <Route path="/portfolio/other"><OtherProjects /></Route>
          </Switch>
    </div>
  );
}

export default App;
