import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

const TallOuterContainer = styled.div.attrs(({ dynamicHeight }) => ({
    style: { height: `${dynamicHeight}px` }
}))`
        position: relative;
        width: 100%;
    `

const HorizontalTranslateContainer = styled.div.attrs(({ translateX }) => ({
    style: { transform: `translateX(${translateX}px)` }
}))`
        position: absolute;
        height: 100%;
        will-change: transform;`

const calcDynamicHeight = objectWidth => {
    const vw = window.innerWidth
    const vh = window.innerHeight
    return objectWidth - vw + vh + 150
}

const handleDynamicHeight = (ref, setDynamicHeight) => { 
    const objectWidth = ref.current.scrollWidth //3. which sets the objectWidth property to exactly that number of pixels
    const dynamicHeight = calcDynamicHeight(objectWidth) //4. it runs a calculation to make things everything scroll proper
    setDynamicHeight(dynamicHeight) //5. Then it passes that number into a piece of state called dynamic height
}

const applyScrollListener = (ref, setTranslateX) => {
    window.addEventListener("scroll", () => {
        const offsetTop = -ref.current.offsetTop; //I did not fix it 6/23 I think i may want it to just wait a sec before determining this?
        setTranslateX(offsetTop)
    })
}

function HorizontalScroll({ children }) {
    const [dynamicHeight, setDynamicHeight] = useState(null) //changing this to a number does something interesting? 
    const [translateX, setTranslateX] = useState(0)

    const containerRef = useRef(null)
    const objectRef = useRef(null)

    const resizeHandler = () => {
        handleDynamicHeight(objectRef, setDynamicHeight)
    }

    useEffect(() => {
        handleDynamicHeight(objectRef, setDynamicHeight) //2. Then that number gets passed into the function
        window.addEventListener("resize", resizeHandler)
        applyScrollListener(containerRef, setTranslateX)
    }, [])
                                                                            //1. So the code below gets the automatic width of the 
                                                                            //HorizontalTranslateContainer, which is set bc of the objects
                                                                            //inside it bc its a flex box with one big row
    return (
        <TallOuterContainer dynamicHeight={dynamicHeight}> 
            <div className="sticky-inner-container" ref={containerRef}>
                <HorizontalTranslateContainer translateX={translateX} ref={objectRef}> 
                    {children}
                </HorizontalTranslateContainer>
            </div>
        </TallOuterContainer>
    )
}

export default HorizontalScroll