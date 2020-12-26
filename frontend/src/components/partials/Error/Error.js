import React from "react"

const Error = (({ error }) => {
    return (
        <h3 className="txt-color-danger-500 fs-16">{error}</h3>
    )
})

export default Error