const orderItemSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product"
    }
})

const OrderItem = mongoose.model("OrderItem", orderItemSchema)

export default OrderItem
