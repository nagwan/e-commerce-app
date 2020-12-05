import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ProductCard from "../components/partials/ProductCard/ProductCard"
import { api } from "../utils/Api"

export default function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        api("api/products", {}, "get").then(({ data }) => {
            setProducts(data)
        })
    }, [])
    return (
        <div className="container d-flex flex-wrap" > {
            products.map(product => (
                <div key={product._id}
                    className="col-12 col-md-6 col-lg-3 m-y-15" >
                    <Link className="no-decoration txt-color-main-500"
                        to={`/products/${product._id}`} >
                        <ProductCard product={product}
                        />
                    </Link>
                </div>
            ))
        } </div>
    )
}