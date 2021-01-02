import express from "express"
const router = express.Router()
import {index, view} from "../controllers/products.js"

router.get('/', index)

router.get('/:id', view)

export default router