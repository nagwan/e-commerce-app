import React, { useState } from "react"
import InputField from "../../partials/InputField/InputField"
import { isValidEmail, isValidString } from "../../../utils/validateData"
import { useSelector } from "react-redux"

export default function EditForm({saveChanges, discardChanges}) {
  const {user, error, isLoading} = useSelector(state => state.user)

  const [email, setEmail] = useState(user.email)
  const [emailError, setEmailError] = useState("")

  const [name, setName] = useState(user.name)
  const [nameError, setNameError] = useState("")


  function handleNameChange(val) {
    setName(val)
    setNameError("")
  }

  function handleEmailChange(val) {
    setEmail(val)
    setEmailError("")
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


  async function validateData() {
    await validateEmail()
    await validateName()

    if (!nameError && !emailError) {
        saveChanges({ email, name })
    }
  }

  return (
    <div className="w-100 d-flex flex-wrap justify-content-center">
      <div className="col-12  bg-white p-30 m-y-50 radius-4 shadow-4">

        <div className="w-100 m-y-10">
          <InputField type="text" placeholder="Type your name" handleChange={handleNameChange} value={name} error={nameError} />
        </div>

        <div className="w-100 m-y-10">
          <InputField type="email" placeholder="Type your email address" handleChange={handleEmailChange} value={email} error={emailError} />
        </div>

        {error && <div>
          <span className="fs-14 txt-color-danger-500 font-primary-regular">{error}</span>
        </div>}

      
        <div className="w-100 d-flex justify-content-between m-y-30">
          <button disabled={isLoading} className="col-auto btn p-10 radius-4 btn-main" onClick={validateData}>
            <span>Save</span>
          </button>

          <button disabled={isLoading} className="col-auto btn p-10 radius-4 " onClick={discardChanges}>
            <span>Discard</span>
          </button>
        </div>
      </div>
    </div>
  )
}

