import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MANGO_URI, {
            useUnifiedTopology: true, 
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(`mango DB connected on ${connection.connection.host}`)
        
    } catch (error) {
        console.log(`Error ${error.message}`)
        process.exit(1)
    }
}

export default connectDB