import express from "express"
import asyncHandler from "express-async-handler"
const router = express.Router()
import Product from "../models/Product.js"

router.get('/', asyncHandler(async (req, res) => {
    let products = await Product.find({})
    res.json(products)
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404).json({message: "product not found"})
    }
}))

export default router