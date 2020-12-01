import React from "react"

function ParallaxImg(props) {

    return (
        <div className="parallax-img" style={{
            position: 'absolute',
            marginLeft: props.xAxis,
            marginTop: props.yAxis,
            zIndex: 0
        }}>
            <img src={props.img} />
        </div>
    )
}

export default ParallaxImg