import React from "react"
import "./rating.sass"

export default function Rating({ value, totalRates }) {
    return (
        <div className="w-100 d-flex flex-wrap justify-content-between">
            <div className="rating-stars">
                {[1, 2, 3, 4, 5].map(el => (
                    <i className="far fa-star" key={el}></i>
                ))}
            </div>
            <div className="fs-12 txt-color-main-500 font-primary-regular">
                <span>{totalRates} Reviews</span>
            </div>
        </div>
    )
}