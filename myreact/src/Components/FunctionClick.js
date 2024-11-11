
// Event handling in function component
import React from 'react'

function FunctionClick () {
    function clickHandler() {
        console.log('button clicked')
    }
    return(
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick