import React from "react"
import HorizontalScroll from "./horizontal-scroll"
import HomeLanding from "./HomeComponents/home-landing"
import HomePortfolio from "./HomeComponents/home-portfolio"
import HomeSkills from "./HomeComponents/home-skills"
import HomeAbout from "./HomeComponents/home-about"
import HomeRecipes from "./HomeComponents/home-recipes"


//https://sudo.isl.co/translate-vertical-horizontal/
//Tutorial/info about sideways scroll

function Home() {
    return (
        <div className="main-content">
            <div className="horizontal-section">
                <HorizontalScroll>
                    <div className="cards-container">
                        <HomeLanding />
                        <HomeSkills />
                        <HomeAbout />
                        <HomeRecipes />
                    </div>
                </HorizontalScroll>
            </div>
        </div>
)
}

export default Home