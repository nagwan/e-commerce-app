import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./navbar.sass"
import { useDispatch, useSelector } from "react-redux"
import { userLogout } from "../../../store/user/actions"

export default function Navbar() {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const history = useHistory()

    function logout(){
        dispatch(userLogout(history))
    }

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

                <Link to={user.id ? '/me' : '/login'} className="m-x-15 txt-color-white no-decoration">
                    <div>
                        <i className="far fa-user"></i>
                        <span className="m-x-5">{user.id ? user.name : 'Login'}</span>

                    </div>
                </Link>


                {user.id && <div className="cursor-pointer" onClick={logout}>
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="m-x-5">Logout</span>
                </div>}


            </div>

        </nav>
    )
}