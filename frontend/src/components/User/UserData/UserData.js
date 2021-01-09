import React from "react"
import { useSelector } from "react-redux"

const UserData = (({edit}) => {
    const user = useSelector(state => state.user.user)
    return (
        <div className="w-100 bg-white radius-6 shadow-4 p-15">
            <div className="w-100 d-flex justify-content-end">
                <i className="fas fa-user-edit cursor-pointer fs-16" onClick={edit}></i>
            </div>
            <div className="w-100 justify-content-center d-flex flex-wrap">
                <h2 className="font-primary-bold">{user.name}</h2>
            </div>
            <div className="w-100 justify-content-center d-flex flex-wrap">
                <h3 className="font-primary-regular">{user.email}</h3>
            </div>
        </div>
    )
})

export default UserData