import React from "react"
import Rating from "../Rating/Rating"
import "./product-card.sass"

export default function ProductCard({ product }) {
    return (
        <div className="card-container w-100 bg-white radius-6 shadow-4 p-10 d-flex flex-column justify-content-between align-items-between">
            <div className="card-img">
                <img alt={product.name} src={product.image} width="100%" height="100%" />
            </div>

            <div className="card-content d-flex">
                <p title={product.name} className="fs-16 txt-color-main-500 font-primary-bold m-r-15">{product.name.substring(0, 30)}{product.name.length > 30 && '...'}</p>
                <p className="fs-16 txt-color-main-800 font-primary-bold">${product.price}</p>
            </div>

            <div className="card-rating m-y-5">
                <Rating value={product.rating} totalRates={product.numReviews} />
            </div>
        </div>
    )
}
