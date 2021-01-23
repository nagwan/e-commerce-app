import React, { useState } from "react"
import InputField from "../components/partials/InputField/InputField"
import { Link, useHistory } from "react-router-dom"
import { isValidEmail, isValidString } from "../utils/validateData"
import { useDispatch, useSelector } from "react-redux"
import { userLogin } from "../store/user/actions"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const isLoading = useSelector(state => state.user.isLoading)
    const error = useSelector(state => state.user.error)
    const [credentialsError, setCredentialsError] = useState(error)

    const dispatch = useDispatch()
    const history = useHistory()

    function handleEmailChange(val) {
        setEmail(val)
    }

    function handlePasswordChange(val) {
        setPassword(val)
    }

    function submit() {
        dispatch(userLogin({ email, password }, history))
    }

    function validateData() {
        const emailValid = isValidEmail(email)
        const passwordValid = isValidString(password, 5, 15)

        if (emailValid && passwordValid) {
            submit()
        } else {
            setCredentialsError("something wrong with your credentials")
        }
    }

    return (
        <div className="w-100 d-flex flex-wrap justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 bg-white p-30 m-y-50 radius-4 shadow-4">
                <div className="w-100 m-y-10">
                    <InputField type="email" placeholder="Type your email address" handleChange={handleEmailChange} value={email} error={credentialsError} />
                </div>

                <div className="w-100 m-y-10">
                    <InputField type="password" placeholder="Type your password" handleChange={handlePasswordChange} value={password} />
                </div>

                <div className="w-100 m-y-10">
                    <Link to="/register">
                        <span>Create an account instead</span>
                    </Link>
                </div>

                <div className="w-100 d-flex justify-content-center m-y-30">
                    <button disabled={isLoading} className="col-12 col-md-4 btn p-10 radius-4 btn-main" onClick={validateData}>
                        <span>Login</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

