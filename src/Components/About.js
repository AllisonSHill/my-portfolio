import React, { useState } from "react"
import { Link } from "react-router-dom"
import InstagramEmbed from 'react-instagram-embed';

import AboutModal from "./MiscComponents/AboutModal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp, faArrowLeft, faArrowRight, faArrowUp, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import blm from "../Images/blm.png"
import accessfund from "../Images/accessfund.png"
import lnt from "../Images/lnt.png"
import cfi from "../Images/CFI.jpg"

import meGlasses from "../Images/meGlasses.jpg"

import bennyAndFlo from "../Images/bennyAndFlo.jpg"
import biersMountain from "../Images/biersMountain.jpg"
import moWater from "../Images/MoWater.jpg"
import biersAndMo from "../Images/biersAndMo.jpg"

import twitter from "../Images/twitter.png"
import instagram from "../Images/instagram.png"
import linkedin from "../Images/linkedin.png"

import climbing from "../Images/unaweep.JPG"


function About() {
    const [showCauseModal, setShowCauseModal] = useState(false)
    const [showPetsModal, setShowPetsModal] = useState(false)
    const [showSocialModal, setShowSocialModal] = useState(false)

    const CauseModalButton = showCauseModal ? <button onClick={() => setShowCauseModal(!showCauseModal)} className="about-modal-button" id="cause-modal-button">Hide</button> : 
        <button onClick={() => hideNotCauseModals()} className="about-modal-button" id="cause-modal-button">Something to Believe In</button>

    const PetsModalButton = showPetsModal ? <button onClick={() => setShowPetsModal(!showPetsModal)} className="about-modal-button" id="pets-modal-button">Hide</button> :
        <button onClick={() => hideNotPetsModals()} className="about-modal-button" id="pets-modal-button">Fur Babies</button>

    const SocialModalButton = showSocialModal ? <button onClick={() => setShowSocialModal(!showSocialModal)} className="about-modal-button" id="social-modal-button">Hide</button> :
        <button onClick={() => hideNotSocialModals()} className="about-modal-button" id="social-modal-button">Social Media</button>

    function hideNotCauseModals() {
        if (showCauseModal === false) {
            setShowCauseModal(!showCauseModal)
            setShowPetsModal(false)
            setShowSocialModal(false)
        }
    }
    function hideNotPetsModals() {
        if (showPetsModal === false) {
            setShowPetsModal(!showPetsModal)
            setShowCauseModal(false)
            setShowSocialModal(false)
        }
    }
    function hideNotSocialModals() {
        if (showSocialModal === false) {
            setShowSocialModal(!showSocialModal)
            setShowCauseModal(false)
            setShowPetsModal(false)
        }
    }


    return (
        <div className="main-content" id="about-content">
            {CauseModalButton}
            {PetsModalButton}
            {SocialModalButton}
            <div className="cause-modal-wrapper">

                <AboutModal showModal={showCauseModal}>
                    <div className="cause-modal">
                        <div className="causes-container">
                            <div className="single-cause">
                                <img className="cause-logo" style={{ maxHeight: 100 }} src={blm} />
                                <div>
                                    <h3>Black Lives Matter</h3>
                                    <a href="https://blacklivesmatter.com/" target="_blank"><p>Learn More</p></a>
                                </div>
                            </div>
                            <div className="single-cause">
                                <img className="cause-logo" style={{ maxHeight: 90 }} src={accessfund} />
                                <div>
                                    <h3>Access Fund</h3>
                                    <a href="https://www.accessfund.org/" target="_blank"><p>Learn More</p></a>
                                </div>
                            </div>
                        </div>
                        <div className="causes-container">
                            <div className="single-cause">
                                <img className="cause-logo" style={{ maxHeight: 80 }} src={lnt} />
                                <div>
                                    <h3>Leave No Trace</h3>
                                    <a href="https://lnt.org/" target="_blank"><p>Learn More</p></a>
                                </div>
                            </div>
                            <div className="single-cause">
                                <img className="cause-logo" style={{ maxHeight: 80 }} src={cfi} />
                                <div>
                                    <h3>Colorado 14ers Initiative</h3>
                                    <a href="https://www.14ers.org/" target="_blank"><p>Learn More</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </AboutModal>
            </div>

            <div className="pets-modal-wrapper">
                <AboutModal showModal={showPetsModal}>
                    <div className="pets-modal">
                        <div className="pets-content">
                            <div className="pets-wrapper">
                                <div className="pets-images-container">
                                    <img className="pets-modal-img" src={biersMountain} style={{ height: 340 }} />  
                                    <div className="pets-inner-container">
                                        <img className="pets-modal-img" src={bennyAndFlo} style={{ height: 220 }} />
                                        <div>
                                            <p><FontAwesomeIcon icon={faArrowUp} /> Benny & Flo <FontAwesomeIcon icon={faArrowUp} /></p>
                                            <div className="pets-names-flex">
                                                <div><p><FontAwesomeIcon icon={faArrowLeft} /> Biers</p></div>
                                                <div><p>Maurice <FontAwesomeIcon icon={faArrowRight} /></p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <img className="pets-modal-img" src={moWater} style={{ height: 340 }} />
                                </div>
                                <div className="pets-images-container">
                                    <img className="pets-modal-img" src={biersAndMo} style={{ height: 172 }} /><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </AboutModal>
            </div>

            <div className="social-modal-wrapper">
                <AboutModal showModal={showSocialModal}>
                    <div className="social-modal">
                        <div className="social-content">
                            <div className="social-network-container">
                                <div className="single-social-network">
                                    <a href="http://instagram.com/allisonataltitude" target="_blank">
                                        <img style={{ maxHeight: 70 }} src={instagram} />
                                        <p>Pictures of me climbing rocks, cute dogs, very Colorado.</p>
                                    </a>
                                </div>
                                <div className="single-social-network">
                                    <a href="http://twitter.com/allisonsplanet" target="_blank">
                                        <img style={{ maxHeight: 70 }} src={twitter} />
                                        <p>My opinions on how much Trump sucks. Sometimes I'm funny.</p>
                                    </a>
                                </div>
                            </div>
                            <div className="social-network-container">
                                <div className="single-social-network">
                                    <a href="https://www.linkedin.com/in/allison-s-hill/" target="_blank">
                                        <img style={{ maxHeight: 70 }} src={linkedin} />
                                        <p>In which I attempt to appear professional.</p>
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </AboutModal>
            </div>

            
            <div className="about-subtitle">
                <h2 style={{ fontSize: 20 }}><FontAwesomeIcon icon={faArrowAltCircleUp} /> &nbsp;&nbsp;&nbsp; Learn more about me &nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={faArrowAltCircleUp} /></h2>
            </div>
            <div className="about-bio">
                <div className="about-bio-image-container">
                    <img className="about-bio-image" src={meGlasses} />
                </div>
                <div>
                    <h2>
                        <FontAwesomeIcon icon={faEnvelope} />
                        &nbsp;&nbsp;&nbsp; <a href="mailto:allison.m.s.hill@gmail.com" style={{ fontFamily: 'Fira Sans' }}>Email Me!</a> &nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faEnvelope} />
                    </h2>
                    <div className="about-bio-text">
                        <p>
                            I'm Allison!<br /><br/>
                            I'm a ReactJS Front End Developer.<br /><br/>
                            I'm originally from LA, I moved to Colorado in 2014 to climb stuff and escape the rising sea levels. <br/><br/>
                            I spent 10 years working as a live sound engineer for theater, concerts, and corporate events, which is super not cool, don't think its cool.<br /><br />
                            I just like making things functional and pretty with code! 
                        </p>
                        <a href="mailto:allison.m.s.hill@gmail.com">allison.m.s.hill@gmail.com</a>
                    </div>
                </div>
                <div className="about-bio-image-container">
                    <img className="about-bio-image" style={{ maxWidth: 400 }} src={climbing} />
                </div>
                    
            </div>

            
        </div>
    )
}

export default About



    //< div className = "instagram-container" >
    //    <InstagramEmbed
    //        url='https://www.instagram.com/p/CEKTrDODeNZ/?utm_source=ig_web_copy_link'
    //        maxWidth={320}
    //        hideCaption={false}
    //        containerTagName='div'
    //        protocol=''
    //        injectScript
    //        onLoading={() => { }}
    //        onSuccess={() => { }}
    //        onAfterRender={() => { }}
    //        onFailure={() => { }}
    //    />
    //                        </div >