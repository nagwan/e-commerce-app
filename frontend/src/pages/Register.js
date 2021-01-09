import React, { useState } from "react"
import InputField from "../components/partials/InputField/InputField"
import { Link, useHistory } from "react-router-dom"
import { isValidEmail, isValidString } from "../utils/validateData"
import { useDispatch, useSelector } from "react-redux"
import { userRegister } from "../store/user/actions"

export default function Register() {
  const isLoading = useSelector(state => state.user.isLoading)
  const error = useSelector(state => state.user.error)

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")

  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")

  const dispatch = useDispatch()
  const history = useHistory()


  function handleNameChange(val) {
    setName(val)
    setNameError("")
  }

  function handleEmailChange(val) {
    setEmail(val)
    setEmailError("")
  }

  function handlePasswordChange(val) {
    setPassword(val)
    setPasswordError("")
  }

  function submit() {
    dispatch(userRegister({ email, password, name }, history))
  }

  function validateEmail() {
    if (!email || !isValidEmail(email)) {
      setEmailError("Please add a valid email address")
    }
  }

  function validateName() {
    if (!name || !isValidString(name, 2, 50)) {
      setNameError("your name must be at least 2 charters and 50 charters max")
    }
  }

  function validatePassword() {
    if (!password || !isValidString(password, 5, 15)) {
      setPasswordError("your password must be at least 5 charters and 15 charters max")
    }
  }

  async function validateData() {
    await validateEmail()
    await validateName()
    await validatePassword()

    if (!nameError && !emailError && !passwordError) {
      submit()
    }
  }

  return (
    <div className="w-100 d-flex flex-wrap justify-content-center">
      <div className="col-12 col-md-6 col-lg-4 col-xl-3 bg-white p-30 m-y-50 radius-4 shadow-4">

        <div className="w-100 m-y-10">
          <InputField type="text" placeholder="Type your name" handleChange={handleNameChange} value={name} error={nameError} />
        </div>

        <div className="w-100 m-y-10">
          <InputField type="email" placeholder="Type your email address" handleChange={handleEmailChange} value={email} error={emailError} />
        </div>

        <div className="w-100 m-y-10">
          <InputField type="password" placeholder="Type your password" handleChange={handlePasswordChange} value={password} error={passwordError} />
        </div>

        {error && <div>
          <span className="fs-14 txt-color-danger-500 font-primary-regular">{error}</span>
        </div>}

        <div className="w-100 m-y-10">
          <Link to="/login">
            <span>Login instead</span>
          </Link>
        </div>

        <div className="w-100 d-flex justify-content-center m-y-30">
          <button disabled={isLoading} className="col-auto btn p-10 radius-4 btn-success" onClick={validateData}>
            <span>Create account</span>
          </button>
        </div>
      </div>
    </div>
  )
}

