import * as actions from "./actions"

let cartItems = localStorage.getItem("cartItems")

const INITIAL_STATE = {
    items: cartItems ? JSON.parse(cartItems) : [],
}

export const cartReducer = ((state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.ADD_ITEM:
            return { ...state, items: setCartItems(state.items, action.payload.data) }
        case actions.CHANGE_QYT:
            return { ...state, items: changeItemQyt(state.items, action.payload.data.id, action.payload.data.qyt) }
        case actions.REMOVE_ITEM:
            return { ...state, items: removeItem(state.items, action.payload.data.id) }
        default:
            return state
    }
})

function setCartItems(allItems = [], newItem) {
    let itemExists = allItems.find(item => item._id === newItem._id)
    let items = allItems

    if (itemExists) {
        items = items.map((item) => {
            if (item._id === itemExists._id) {
                item.qyt = item.qyt + 1
            }
            return item
        })
    } else {
        items = [...items, { ...newItem, qyt: 1 }]
    }
    localStorage.setItem("cartItems", JSON.stringify(items))
    return items
}


function changeItemQyt(allItems = [], itemId, qyt) {

    let items = []
    items = allItems.map((item) => {
        if (item._id === itemId) {
            item.qyt = qyt
        }
        return item
    })

    localStorage.setItem("cartItems", JSON.stringify(items))
    return items
}


function removeItem(allItems, itemId) {
    let items = []
    items = allItems.filter(item => item._id !== itemId)

    localStorage.setItem("cartItems", JSON.stringify(items))

    return items
}

