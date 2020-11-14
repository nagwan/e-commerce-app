import React from "react"
import { Link } from "react-router-dom"
import products from "../../products"
import ProductCard from "../partials/ProductCard/ProductCard"

export default function Home() {
    return (
        <div className="d-flex flex-wrap">
            {
                products.map(product => (
                    <div key={product._id} className="col-12 col-md-6 col-lg-3 m-y-15">
                        <Link className="no-underline" to={`/products/${product._id}`}>
                            <ProductCard product={product} />
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}