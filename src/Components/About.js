import React from "react"
import {Link} from "react-router-dom"

import blm from "../Images/blm.png"
import accessfund from "../Images/accessfund.png"
import lnt from "../Images/lnt.png"

import meGlasses from "../Images/meGlasses.jpg"
import benny from "../Images/benny.JPG"
import biers from "../Images/biers.JPG"
import flo from "../Images/flo.JPG"
import dasani from "../Images/dasani.jpg"
import flintlock from "../Images/flintlock.jpg"
import guanellaV2 from "../Images/guanellaV2.jpg"
import pikespeak from "../Images/pikespeak.JPG"
import redRockV1 from "../Images/redRockV1.JPG"


function About() {
    return (
        <div className="main-content">
            <h1>About</h1>
            <div className="about-grid">
                <div className="cause-container-1">
                    <img className="cause-logo" style={{ maxHeight: 100 }} src={blm} />

                </div>
                <div className="cause-container-2">
                    <img className="cause-logo" style={{ maxHeight: 90 }} src={accessfund} />

                </div>
                <div className="cause-container-3">
                    <img className="cause-logo" style={{ maxHeight: 80 }} src={lnt} />

                </div>

                <div className="pikespeak">
                    <img src={pikespeak} style={{ maxHeight: 350 }} />
                </div>
                <div className="dasani">
                    <img src={dasani} style={{ maxHeight: 400 }} />
                </div>
                <div className="guanellaV2">
                    <img src={guanellaV2} style={{maxHeight: 450}} />
                </div>
                <div className="flintlock">
                    <img src={flintlock} style={{maxHeight: 550}} />
                </div>

                <div className="meGlasses">
                    <img src={meGlasses} style={{ maxHeight: 350 }} />
                </div>
                <div className="benny">
                    <img src={benny} style={{ maxHeight: 200 }} />
                </div>
                <div className="biers">
                    <img src={biers} style={{ maxHeight: 450 }} />
                </div>
                <div className="flo">
                    <img src={flo} style={{ maxHeight: 200 }} />
                </div>
                
            </div>
        </div>
    )
}

export default About