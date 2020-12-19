import React from "react"
import "./loader.sass"
const Loader = (() => {
    return (
        <div className="loader-container">
            <div className="overlay d-flex align-items-center justify-content-center">
                <div className="loader-spinner" />
            </div>
        </div>
    )
})

export default Loader