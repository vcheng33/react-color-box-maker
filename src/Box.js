import React from "react";


/** This component should display a div with a background color, 
 * width, and height based on the props passed to it.
 * 
 * props:
 * - id
 * - width
 * - height
 * - backgroundColor
 * - removeBox (function)
 * 
 * state:
 * -none
 * 
 * events: 
 * -handleClick (removeBox)
 * 
 * BoxList -> Box
 */

function Box({ id, width, height, backgroundColor, removeBox }) {
    const boxStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: backgroundColor
    }

    function handleClick() {
        removeBox(id)
    }

    return (
        <div>
            <div style={boxStyle}></div>
            <button onClick={handleClick}>
                Remove box
            </button>
        </div>
    )
}

export default Box;