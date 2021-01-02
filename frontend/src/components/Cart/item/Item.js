import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { changeQyt, removeItem } from "../../../store/cart/actions"

const CartItem = (({ item }) => {
    const dispatch = useDispatch()

    function changeItemQyt(val) {
        dispatch(changeQyt({ data: { id: item._id, qyt: val } }))
    }

    function removeFromCart() {

        Swal.fire({
            title: 'Are you sure you want to delete this item?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Remove It`,
            denyButtonText: `Keep it`,
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeItem({ data: { id: item._id } }))
                Swal.fire('Item removed!', '', 'info')
            } else  {
                Swal.fire('Enjoy', '😉', 'success')
            }
        })
    }

    return (
        <div className="w-100 bg-white radius-6 shadow-2 p-30">
            <div className="row align-items-center">
                <div className="col-12 col-md-2">
                    <Link className="no-decoration"
                        to={`/products/${item._id}`}>
                        <img alt={item.name} className="radius-6" src={item.image} width="100%" height="100%" />
                    </Link>
                </div>
                <div className="col-12 col-md-8">
                    <span className="fs-16 font-primary-regular">{item.name}</span>
                    <div className="w-100 d-flex justify-content-between m-t-10 m-b-10">
                        <div className="d-flex align-items-center">
                            <span className="fs-20 txt-color-secondary-500">{(item.price * item.qyt).toFixed(3)}</span>
                            {item.qyt > 1 && < span className="fs-14 txt-color-main-300 m-x-15">({item.price} Each)</span>}

                        </div>

                        <select value={item.qyt} onChange={(e) => changeItemQyt(e.target.value)}>
                            {
                                Array.from({ length: item.countInStock }, ((val, i) => i + 1)).map((option) => <option key={option} value={option}>{option}

                                </option>
                                )
                            }

                        </select>
                    </div>
                </div>
            </div>
            <div className="row m-t-30 justify-content-end">
                <button className="btn txt-underline txt-color-danger-500" onClick={removeFromCart}>
                    <i className="far fa-trash-alt"></i>
                    <span className="m-x-5">Remove From Cart</span>
                </button>
            </div>
        </div>
    )
})

export default CartItem