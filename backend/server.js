import express from 'express'
import dotenv from 'dotenv'
import connectDB from "./config/db.js"

import productsRoutes from "./routes/products.js"
import {notFound, errorHandler} from "./middleware/errors.js"

dotenv.config()

connectDB()

const app = express()

app.use("/api/products", productsRoutes)

app.use(notFound)

app.use(errorHandler)

const port = process.env.PORT || 5000

app.listen(port, console.log(`server is running on port 5000 ${port}`))