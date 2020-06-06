import React from "react"
import HorizontalScroll from "./horizontal-scroll"
import HomeComponentOne from "./HomeComponents/home-component-1"


//https://sudo.isl.co/translate-vertical-horizontal/
//Tutorial/info about sideways scroll

const HomeComponents = React.memo(() =>
    Array(5)
        .fill(0)
        .map((_e, i) => <HomeComponentOne key={`sampleCard-${i}`} />)
);

function Home() {
    return (
        <div className="main-content">
            <div className="horizontal-section">
                <HorizontalScroll>
                    <div className="cards-container">
                        <HomeComponents />
                    </div>
                </HorizontalScroll>
            </div>
        </div>
)
}
//<div className="home-scroll-container">
//    <h1>Allison Hill</h1>
//    <h3>React & Javascript Developer</h3>
//</div>
//<div className="home-scroll-container">
//    <Link to="/portfolio"><h3>View my Portfolio</h3></Link>
//</div>
//    <div className="home-scroll-container">
//        <Link to="/about"><h3>About Me</h3></Link>
//    </div>

export default Home