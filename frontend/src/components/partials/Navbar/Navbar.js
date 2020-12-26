import React from "react"
import { Link } from "react-router-dom"
import "./navbar.sass"

export default function Navbar() {
    return (
        <nav className="w-100 shadow-2 bg-main-800 h-80px d-flex justify-content-between align-items-center txt-color-white p-x-15">
            <Link to="/" className="txt-color-white no-decoration">
                <span className="m-x-5">ShopNow</span>
            </Link>

            <div className="d-flex p-5">
                <Link to="/cart" className="m-x-15 txt-color-white no-decoration">
                    <div>
                        <i className="fas fa-shopping-cart"></i>
                        <span className="m-x-5">Cart</span>
                    </div>
                </Link>

                <div>
                    <i className="far fa-user"></i>
                    <span className="m-x-5">My Account</span>
                </div>
            </div>

        </nav>
    )
}