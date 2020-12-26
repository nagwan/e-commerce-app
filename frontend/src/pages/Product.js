import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import Error from "../components/partials/Error/Error"
import Loader from "../components/partials/loader/Loader"
import ProductDetailsData from "../components/partials/ProductDetailsData/ProductDetailsData"
import { addItem } from "../store/cart/actions"
import { api } from "../utils/Api"

export default function Product({ match, history }) {
    const dispatch = useDispatch()
    const [product, setProduct] = useState({})
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        fetchProduct(match.params.id)
    }, [match.params.id, dispatch])


    function fetchProduct(id) {
        setIsLoading(true)
        api(`/api/products/${id}`, {}, "get").then(({ data }) => {
            setProduct(data)
            setIsLoading(false)
        }).catch((err) => {
            setError(err.response?.data.message || err.message)
            setIsLoading(false)
        })
    }

    function addToCart() {

        dispatch(addItem({ data: product }))

        Swal.fire({
            toast: true,
            icon: 'success',
            position: 'bottom-end',
            title: "The product has been added to the cart successfully",
            showConfirmButton: false,
            timer: 3000
        }).then(() => {
            history.push("/cart")
        })
    }

    const component = error ? <Error /> : <ProductDetailsData product={product} addToCart={addToCart} />

    return (
        <div className="w-100">
            {
                isLoading ? <Loader /> :
                    <>
                        <div className="d-flex m-y-15">
                            <div className="col">
                                <Link className="btn btn-link no-decoration txt-color-main-500" to="/">GO Back</Link>
                            </div>
                        </div>
                        {component}
                    </>
            }
        </div>
    )
}
