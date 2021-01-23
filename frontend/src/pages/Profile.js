import React, { useState } from "react"
import { useDispatch } from "react-redux"
import EditUserForm from "../components/User/EditForm/EditForm"
import UserData from "../components/User/UserData/UserData"
import { userProfileUpdate } from "../store/user/actions"

export default function Profile() {
  const [isEditing, setEditing] = useState(false)

  const dispatch = useDispatch()

  function toggleIsEditing() {
    setEditing(!isEditing)
  }

  function saveUserProfileChanges(data) {
    dispatch(userProfileUpdate(data)).then(()=>{
      setEditing(false)
    })
  }

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
