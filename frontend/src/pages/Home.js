import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Loader from "../components/partials/loader/Loader"
import ProductCard from "../components/partials/ProductCard/ProductCard"
import { productsList } from "../store/products/actions"

export default function Home() {
    const dispatch = useDispatch()
    const { products, error, isLoading } = useSelector(state => state.productList)

    useEffect(() => {
        dispatch(productsList())

    }, [dispatch])
    return (
        <div className="w-100">
            {isLoading ? <Loader /> :

                (error ? <h3 className="txt-color-danger-500 fs-16">{error}</h3> : <div className="container d-flex flex-wrap" > {
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
                } </div>)
            }
        </div>
    )
}