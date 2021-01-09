import asyncHandler from "express-async-handler"
import User from "../models/User.js"

import generateToken from "../utils/generateToken.js"
import { isEmailValid, isStringValid } from "../utils/validateUserData.js"

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



const registerUser = asyncHandler(async (req, res) => {
    const { email, password, name } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error("this email is already taken")
    } else {

        const emailValid = isEmailValid(email || "")
        const passwordValid = isStringValid(password || "", 5, 15)
        const nameValid = isStringValid(name || "", 2, 15)

        if (emailValid && passwordValid && nameValid) {
            const newUser = await User.create({
                email,
                password,
                name
            })

            if (newUser) {
                res.status(201).json({
                    id: newUser._id,
                    email: newUser.email,
                    name: newUser.name,
                    isAdmin: newUser.isAdmin,
                    token: generateToken(newUser._id)
                })
            } else {
                res.status(400)
                throw new Error("invalid user data")
            }
        }else {
            res.status(400)
            throw new Error("invalid user data") 
        }
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

const createUser = (data) => {

}


export {
    authUser,
    getUserProfile,
    registerUser
}
