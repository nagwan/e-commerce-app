import React from "react"

const Calculator = (({ total }) => {
  return (
    <div className="w-100">
      <div className="w-100 bg-white radius-6 shadow-2 p-15">
        <p>Total</p>
        <span>{total}</span>
      </div>

      <div className="w-100 m-t-15 d-flex justify-content-center">
        <button className="btn w-100 p-15 radius-4 btn-main">
          <span className="fs-16">Proceed to checkout</span>
        </button>
      </div>

    </div>
  )
})

export default Calculator