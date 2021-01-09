import React from "react"
import Rating from "../Rating/Rating"

const productDetailsData = (({product, addToCart}) => {
    return (
        <div className="d-flex flex-wrap">
            <div className="col-12 col-md-6">
                <img alt={product.name} src={product.image} width="100%" />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <p className="fs-20 font-primary-bold txt-color-main-900">${product.price}</p>

                <p className="fs-20 font-primary-bold txt-color-main-900">
                    {product.name}
                </p>
                <p className="fs-16 font-primary-bold txt-color-main-500">
                    {product.description}
                </p>

                <Rating value={product.rating} totalRates={product.numReviews} />

            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="fs-16 m-y-10">
                    <i className="fas fa-people-carry"></i>
                    <span> <span className="font-primary-bold">FREE</span>  shipping </span>
                </div>
                <div className="fs-16 m-y-10">
                    <i className="fas fa-hand-holding-usd"></i>
                    <span> 30 days <span className="font-primary-bold">MONEY back</span>  </span>
                </div>

                <div className="fs-16 m-y-10">
                    {
                        product.countInStock >= 0 ? <>
                            <i className="fas fa-hourglass-half"></i>
                            <span> <span className="font-primary-bold">{product.countInStock}</span> ONLY left </span></> : <>
                                <i className="far fa-hourglass"></i>
                                <span> OUT of stock </span>
                            </>
                    }
                </div>

                <button onClick={addToCart} disabled={product.countInStock === 0} className="btn btn-main p-15 radius-4 w-100 fs-16">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="m-x-10">Add to cart</span>
                </button>
            </div>
        </div>
    )
})

export default productDetailsData