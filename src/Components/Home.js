import React from "react"
import HorizontalScroll from "./horizontal-scroll"
import { ParallaxProvider } from 'react-scroll-parallax'
import HomeLanding from "./HomeComponents/home-landing"
import HomePortfolio from "./HomeComponents/home-portfolio"
import HomeSkills from "./HomeComponents/home-skills"
import HomeAbout from "./HomeComponents/home-about"
import HomeRecipes from "./HomeComponents/home-recipes"


//https://sudo.isl.co/translate-vertical-horizontal/
//Tutorial/info about sideways scroll

//https://www.npmjs.com/package/react-scroll-parallax
//Tutorial about Parallax 

function Home() {

    //return (
    //    <div className="main-content">
    //        <div className="horizontal-section">
    //            <HorizontalScroll>
    //                <div className="cards-container">
    //                    <HomeLanding />
    //                    <HomeSkills />
    //                    <HomeAbout />
    //                </div>
    //            </HorizontalScroll>
    //        </div>
    //    </div>
        
        return (
        <div className="main-content">
            <div className="">
                    <div className="cards-container">
                        <HomeLanding />
                    </div>
            </div>
        </div>
)
}

export default Home