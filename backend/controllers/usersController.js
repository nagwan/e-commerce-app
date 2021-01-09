import asyncHandler from "express-async-handler"
import User from "../models/User.js"

import generateToken from "../utils/generateToken.js"

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && await (user.matchPassword(password))) {
        res.json({
            id: user._id,
            email: user.email,
            name: user.name,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error("Invalid email or password")
    }
})

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            id: user._id,
            email: user.email,
            name: user.name,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404)
        throw new Error("User not found")
    }

})




export {
    authUser,
    getUserProfile
}
