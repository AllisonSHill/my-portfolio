import React from "react"

function RedCircle(props) {

    return (
        <div className="red-circle" style={{
            position: 'absolute',
            marginLeft: props.xAxis,
            marginTop: props.yAxis,
            zIndex: 2000
        }}>
        </div>
    )
}

export default RedCircle