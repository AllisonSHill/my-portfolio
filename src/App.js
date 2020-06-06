import React from 'react'
import './App.css'
import { Switch, Route } from "react-router-dom"

import Home from "./Components/Home"
import Portfolio from "./Components/Portfolio"
import About from "./Components/About"



function App() {
  return (
      <div className="App">
          <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/portfolio"><Portfolio /></Route>
              <Route exact path="/about"><About /></Route>
          </Switch>
    </div>
  );
}

export default App;
