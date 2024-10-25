import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from "react-router-dom"
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// Dynamically add Mapbox CSS to the head
const link = document.createElement('link');
link.href = 'https://api.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.css';
link.rel = 'stylesheet';
document.head.appendChild(link);

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
