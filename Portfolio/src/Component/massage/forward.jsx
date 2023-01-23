import React from 'react'

function forward(ref) {
    return (
        <button ref={ref}></button>
    )
}
 const forwardRef = React.forwardRef(forward)

 export default forwardRef;