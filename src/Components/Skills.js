import React from "react"
import SkillBubbles from "./SkillComponents/SkillBubbles"

function Skills() {

    return (
        <div className="main-content">
            <h1>Skills and Resume</h1>

            <div className="skills-container">
                
                <SkillBubbles name="Hard Skills" skill1="Javascript/ jQuery" skill2="ReactJs" skill3="CSS" skill4="Wordpress" skill5="Version Control/Git" skill6="Responsive Design" />
                <div className="resume-button-container">
                    <a href="https://docs.google.com/document/d/1a9bfDXHnIxAqmhv5nNT255bBP5HFcvyV6tYtaTQL94I/edit?usp=sharing" target="_blank">
                        <button className="resume-button">
                            <p>View my Resume<br /><small>on Google Drive</small></p>
                        </button>
                    </a>
                    <button className="resume-button">
                        <p>Download my Resume<br /><small>as a .pdf</small></p>
                    </button>
                </div>
                <SkillBubbles name="Soft Skills" skill1="Communication" skill2="Teamwork" skill3="Collaboration" skill4="Humor" skill5="Responsible" skill6="Driven" />


            </div>
        </div>
    )
}

export default Skills


    //< hr />
    //<p>"A study in the Washington Post says that women have better verbal skills than men. I just want to say to the authors of that study: 'Duh.'"</p>
    //<p><em>- Conan O'Brien</em></p>
    //<hr />