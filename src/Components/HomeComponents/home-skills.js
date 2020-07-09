import React, { useState } from "react"
import { Link } from "react-router-dom"
import ProfeshBio from "./home-skills-files/profesh-bio"
import Resume from "./home-skills-files/resume"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

function HomeSkills() {
    const [bioVisible, setBioVisible] = useState(false)
    const [codeSkillsVisible, setCodeSkillsVisible] = useState(false)
    const [otherSkillsVisible, setOtherSkillsVisible] = useState(false)
    const [resumeVisible, setResumeVisible] = useState(false)

    function viewBio() {
        setBioVisible(true)
        setCodeSkillsVisible(false)
        setOtherSkillsVisible(false)
        setResumeVisible(false)
    }

    function viewCodeSkills() {
        setBioVisible(false)
        setCodeSkillsVisible(true)
        setOtherSkillsVisible(false)
        setResumeVisible(false)
    }

    function viewOtherSkills() {
        setBioVisible(false)
        setCodeSkillsVisible(false)
        setOtherSkillsVisible(true)
        setResumeVisible(false)
    }

    function viewResume() {
        setBioVisible(false)
        setCodeSkillsVisible(false)
        setOtherSkillsVisible(false)
        setResumeVisible(true)
    }

    const skillsOption =
        bioVisible ? <ProfeshBio /> :
            codeSkillsVisible ? <h1>code skills</h1> :
                otherSkillsVisible ? <h1>other skills</h1> :
                    resumeVisible ? <Resume /> :
                        <h2>Select one of the icons to learn more about me</h2>

    const iconsClass = bioVisible || codeSkillsVisible || otherSkillsVisible || resumeVisible ? "skills-home-small-icons" : "skills-home-big-icons"

    return (
        <div className="home-component">
            <div className="skills-home-component">
                <div id="skills-home-icons" className={iconsClass}>
                    < FontAwesomeIcon icon={faBookOpen} className="skills-icon" onClick={() => viewBio() } />
                    < FontAwesomeIcon icon={faLaptopCode} className="skills-icon" onClick={() => viewCodeSkills() } />
                    < FontAwesomeIcon icon={faHeadphonesAlt} className="skills-icon" onClick={() => viewOtherSkills()} />
                    < FontAwesomeIcon icon={faFileAlt} className="skills-icon" onClick={() => viewResume()} />
                </div>
                {skillsOption}
            </div>
        </div>
    )
}

export default HomeSkills