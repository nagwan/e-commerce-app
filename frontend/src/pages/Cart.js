import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Calculator from "../components/Cart/calculator/Calculator"
import CartItem from "../components/Cart/item/Item"

const Cart = (() => {

  const { items } = useSelector(state => state.cart)

  function getTotalCheckout() {
    console.log("HERE")
    let sum = 0

    items.forEach(item => {
      sum = sum + item.price * item.qyt
    });

    return sum.toFixed(3)
  }


  return (
    <div className="w-100">
      {!items.length ? <div className="fs-16 font-primary-regular w-100 text-center m-30">There is no items in the cart, <Link className="font-primary-bold" to="/">Start Shopping</Link></div> :
        <div className="w-100 d-flex flex-wrap">
          <div className="col-12 col-md-8">
            {

              items.map((item) =>
                <div className="w-100 m-b-30" key={item._id}><CartItem item={item} /></div>
              )
            }
          </div>

          <div className="col-12 col-md-4">
            <Calculator total={getTotalCheckout()} />
          </div>

        </div>

      }


    </div>
  )
})

export default Cart