import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken"
import User from "../models/User.js"

const protect = asyncHandler(async (req, res, next) => {
    let token = req.headers.authorization;
    if (token && token.startsWith("Bearer")) {

        try {
            token = token.split(" ")[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select("-password")
            next()

        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error("Not authorized")
        }
    }

    if (!token) {
        res.status(401)
        throw new Error("Not authorized")
    }

})

export {
    protect
}