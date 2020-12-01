import React, { useState, useEffect } from "react"

function SkillBubbles(props) {
    const [hovered, setHovered] = useState(false)
    const [smallSkillClassName, setSmallSkillClassName] = useState("small-skills-circle show")

    useEffect(() => {
        if (smallSkillClassName === "small-skills-circle hide") {
            setSmallSkillClassName("small-skills-circle show")
        }
        else if (smallSkillClassName === "small-skills-circle show") {
            setSmallSkillClassName("small-skills-circle hide")
        }
    }, [hovered])

    return (
        <div className="skills-grid">
            <div className="main-skills-circle" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}><p>{props.name}<br /><small>(hover to view)</small></p></div>
            <div className={smallSkillClassName} id="item1" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}><p>{props.skill1}</p></div>
            <div className={smallSkillClassName} id="item2" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}><p>{props.skill2}</p></div>
            <div className={smallSkillClassName} id="item3" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}><p>{props.skill3}</p></div>
            <div className={smallSkillClassName} id="item4" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}><p>{props.skill4}</p></div>
            <div className={smallSkillClassName} id="item5" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}><p>{props.skill5}</p></div>
            <div className={smallSkillClassName} id="item6" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}><p>{props.skill6}</p></div>
        </div>
    )
}


export default SkillBubbles