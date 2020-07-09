import React from "react"
import {Link} from "react-router-dom"

function ProfeshBio() {
    return (
        <div className="skills-option">
            <h2>Who Am I?</h2>
            <small>This is my professional bio, if you want my personal bio, <Link to="/about">click here</Link></small>
            <p>I started my career as a theater designer. I wanted to design costumes and sound for big musicals. I loved to draw, and I
                loved the comaraderie that comes with a career in the arts. I also loved being surrounded by like minded people and feeling
                that it was my job to foster my own creativity and that of my peers.
            </p>
            <p>I started a coding bootcamp in March 2019. When I graduated in January 2020, I had learned how to do a little bit of a
                lot of things, both front end and back end development. The bootcamp was focused in C# and .NET development, but my
                favorite part of the curriculum was the Javascript course.
            </p>
            <p>
                I boosted up my Javascript skills through self-teaching, and as I read more into the front end development world, I
                was intrigued by how efficient the React library was. I took, and graduated, the Scrimba React Developer course, in
                May of this year (2020), and I've been working on building my React skills by creating a number of projects, and
                I've been getting back to my artistic roots with wanting to develop beautiful Apps as well.
            </p>
        </div>
    )
}

export default ProfeshBio