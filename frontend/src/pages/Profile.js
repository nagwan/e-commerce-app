import React, { useState } from "react"
import EditUserForm from "../components/User/EditForm/EditForm"
import UserData from "../components/User/UserData/UserData"

export default function Profile() {
  const [isEditing, setEditing] = useState(false)

  function toggleIsEditing() {
    setEditing(!isEditing)
  }

  function saveUserProfileChanges() { }

  return (
    <div className="w-100 d-flex justify-content-center">
      <div className="col-12 col-md-6 col-lg-4 col-xl-3">
        {
          isEditing ? <EditUserForm saveChanges={saveUserProfileChanges} discardChanges={toggleIsEditing} /> 
          : 
          <UserData edit={toggleIsEditing} />
        }
      </div>
    </div>
  )
}
