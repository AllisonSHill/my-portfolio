import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import RedCircle from "./red-circle"
import ParallaxImg from "./parallax-images"
import BgImage from "../../Images/bg_parallax.png"
import MidImage from "../../Images/mid_parallax.png"
import TopImage from "../../Images/top_parallax.png"

function HomeLanding() {
    const [scrollCount, setScrollCount] = useState(0)
    const [xAxisBottomLeft, setXAxisBottomLeft] = useState(0)
    const [xAxisBottomRight, setXAxisBottomRight] = useState(2602)
    const [xAxisMiddleLeft, setXAxisMiddleLeft] = useState(0)
    const [xAxisMiddleRight, setXAxisMiddleRight] = useState(2602)
    const [xAxisTopLeft, setXAxisTopLeft] = useState(0)
    const [xAxisTopRight, setXAxisTopRight] = useState(2602)
    const [deltaY, setDeltaY] = useState()

    const yAxis = 0

    useEffect(() => {
        setXAxisBottomLeft(() => XAxisBottomLeft())
        setXAxisBottomRight(() => XAxisBottomRight())
        setXAxisMiddleLeft(() => XAxisMiddleLeft())
        setXAxisMiddleRight(() => XAxisMiddleRight())
        setXAxisTopLeft(() => XAxisTopLeft())
        setXAxisTopRight(() => XAxisTopRight())
    }, [scrollCount])

    function Scroll(e) {
        setScrollCount(scrollCount + 1)
        const y = e.deltaY
        setDeltaY(y)
    }

    function XAxisBottomLeft() {
        if (xAxisBottomLeft <= 2702 && xAxisBottomLeft >= -2702) {
            if (Math.sign(deltaY) == -1) {
                setXAxisBottomLeft(xAxisBottomLeft + 5)
            }
            else {
                setXAxisBottomLeft(xAxisBottomLeft - 5)
            }
        }
        else if (xAxisBottomLeft < -2702) {
            const XAxisJumpPos = 2454 + (xAxisBottomLeft + 2702)
            setXAxisBottomLeft(XAxisJumpPos)
        }
        else if (xAxisBottomLeft > 2702) {
            const XAxisJumpPos = -2454 + (xAxisBottomLeft - 2702)
            setXAxisBottomLeft(XAxisJumpPos)
        }
    }

    function XAxisBottomRight() {
        if (xAxisBottomRight <= 2702 && xAxisBottomRight >= -2702) {
            if (Math.sign(deltaY) == -1) {
                setXAxisBottomRight(xAxisBottomRight + 5)
            }
            else {
                setXAxisBottomRight(xAxisBottomRight - 5)
            }
        }
        else if (xAxisBottomRight < -2702) {
            const XAxisJumpPos = 2454 + (xAxisBottomRight + 2702)
            setXAxisBottomRight(XAxisJumpPos)
        }
        else if (xAxisBottomRight > 2702) {
            const XAxisJumpPos = -2454 + (xAxisBottomRight - 2702)
            setXAxisBottomRight(XAxisJumpPos)
        }
    }

    function XAxisMiddleLeft() {
        if (xAxisMiddleLeft <= 2702 && xAxisMiddleLeft >= -2702) {
            if (Math.sign(deltaY) == -1) {
                setXAxisMiddleLeft(xAxisMiddleLeft + 10)
            }
            else {
                setXAxisMiddleLeft(xAxisMiddleLeft - 10)
            }
        }
        else if (xAxisMiddleLeft < -2702) {
            const XAxisJumpPos = 2454 + (xAxisMiddleLeft + 2702)
            setXAxisMiddleLeft(XAxisJumpPos)
        }
        else if (xAxisMiddleLeft > 2702) {
            const XAxisJumpPos = -2454 + (xAxisMiddleLeft - 2702)
            setXAxisMiddleLeft(XAxisJumpPos)
        }
    }

    function XAxisMiddleRight() {
        if (xAxisMiddleRight <= 2702 && xAxisMiddleRight >= -2702) {
            if (Math.sign(deltaY) == -1) {
                setXAxisMiddleRight(xAxisMiddleRight + 10)
            }
            else {
                setXAxisMiddleRight(xAxisMiddleRight - 10)
            }
        }
        else if (xAxisMiddleRight < -2702) {
            const XAxisJumpPos = 2454 + (xAxisMiddleRight + 2702)
            setXAxisMiddleRight(XAxisJumpPos)
        }
        else if (xAxisMiddleRight > 2702) {
            const XAxisJumpPos = -2454 + (xAxisMiddleRight - 2702)
            setXAxisMiddleRight(XAxisJumpPos)
        }
    }

    function XAxisTopLeft() {
        if (xAxisTopLeft <= 2702 && xAxisTopLeft >= -2702) {
            if (Math.sign(deltaY) == -1) {
                setXAxisTopLeft(xAxisTopLeft + 20)
            }
            else {
                setXAxisTopLeft(xAxisTopLeft - 20)
            }
        }
        else if (xAxisTopLeft < -2702) {
            const XAxisJumpPos = 2454 + (xAxisTopLeft + 2702)
            setXAxisTopLeft(XAxisJumpPos)
        }
        else if (xAxisTopLeft > 2702) {
            const XAxisJumpPos = -2454 + (xAxisTopLeft - 2702)
            setXAxisTopLeft(XAxisJumpPos)
        }
    }

    function XAxisTopRight() {
        if (xAxisTopRight <= 2702 && xAxisTopRight >= -2702) {
            if (Math.sign(deltaY) == -1) {
                setXAxisTopRight(xAxisTopRight + 20)
            }
            else {
                setXAxisTopRight(xAxisTopRight - 20)
            }
        }
        else if (xAxisTopRight < -2702) {
            const XAxisJumpPos = 2454 + (xAxisTopRight + 2702)
            setXAxisTopRight(XAxisJumpPos)
        }
        else if (xAxisTopRight > 2702) {
            const XAxisJumpPos = -2454 + (xAxisTopRight - 2702)
            setXAxisTopRight(XAxisJumpPos)
        }
    }

    return (
        <div className="home-component" onWheel={Scroll}>
            <div className="parallax-bottom">
                <ParallaxImg yAxis={yAxis} xAxis={xAxisBottomLeft} img={BgImage} />
                <ParallaxImg yAxis={yAxis} xAxis={xAxisBottomRight} img={BgImage} />
            </div>
            <div className="parallax-middle">
                <ParallaxImg yAxis={yAxis} xAxis={xAxisMiddleLeft} img={MidImage} />
                <ParallaxImg yAxis={yAxis} xAxis={xAxisMiddleRight} img={MidImage} />
            </div>
            <div className="parallax-top">
                <ParallaxImg yAxis={yAxis} xAxis={xAxisTopLeft} img={TopImage} />
                <ParallaxImg yAxis={yAxis} xAxis={xAxisTopRight} img={TopImage} />
            </div>
            <div className="landing-home-component">
                <h1>Allison Hill</h1>
                <h2>Front End Developer</h2>
                <h4>I built this site in 2020 using Reactjs</h4>
                <h5>(its very much a work in progress)</h5>
                <h5 className="link"><Link to="/portfolio">View my Portfolio</Link></h5>
                <h5><Link to="/about">Contact Me</Link></h5>
            </div>
        </div>
    )
}

export default HomeLanding