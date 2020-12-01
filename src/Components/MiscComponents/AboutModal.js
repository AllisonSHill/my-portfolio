import React from "react"

function AboutModal(props) {
    let visibility = "show";

    if (props.showModal === false) {
        visibility = "hide";
    }

    return (
        <div id="about-modal" className={visibility}>
            {props.children}
        </div>
    )
}

export default AboutModal
