import mongoose from "mongoose"
import dotenv from "dotenv"
import users from "./data/users.js"
import products from "./data/products.js"
import User from "./models/User.js"
import Product from "./models/Product.js"
import Order from "./models/Order.js"
import connectDB from "./config/db.js"


dotenv.config()
connectDB()


const importData = async () => {
    try {

        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()

        const addedUsers = await User.insertMany(users)

        const admin = addedUsers.find(user => user.isAdmin)

        const addedProducts = products.map(product => {
            return { ...product, user: admin }
        })

        await Product.insertMany(addedProducts)
        console.log("DATA IMPORTED")

        process.exit()

    } catch (error) {

        console.log(`Error ${error.message}`)
        process.exit(1)
    }
}


const destroyData = async () => {
    try {

        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()



        console.log("DATA DESTROYED")

        process.exit()

    } catch (error) {

        console.log(`Error ${error.message}`)
        process.exit(1)
    }
}


if (process.argv[2] === "-d") {
    destroyData()
} else {
    importData()
}