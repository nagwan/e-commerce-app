import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import Error from "../components/partials/Error/Error"
import Loader from "../components/partials/loader/Loader"
import { fetchProductDetails } from "../store/products/actions"
import ProductDetailsData from "../components/partials/ProductDetailsData/ProductDetailsData"
import { addItem } from "../store/cart/actions"

export default function Product({ match, history }) {
    const dispatch = useDispatch()

    const { product, error, isLoading } = useSelector(state => state.productDetails)

    useEffect(() => {
        dispatch(fetchProductDetails(match.params.id))
    }, [match.params.id, dispatch])

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
