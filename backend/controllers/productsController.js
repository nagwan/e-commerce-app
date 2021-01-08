import asyncHandler from "express-async-handler"
import Product from "../models/Product.js"


const index = asyncHandler(async (req, res)=>{
    let products = await Product.find({})
    res.json(products)
})


const view = asyncHandler(async (req, res)=>{
    const product = await Product.findOne({_id: req.params.id})
    if (product) {
        res.json(product)
    } else {
        res.status(404).json({message: "product not found"})
    }
})

export {index, view}