const express = require('express')
const dotenv = require("dotenv")

dotenv.config()

const app = express()

const products = require('./data/products')

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(product => product._id === req.params.id)
    res.json(product)
})

const port = process.env.PORT || 5000

app.listen(port, console.log(`server is running on port 5000 ${port}`))