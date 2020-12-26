import * as actions from "./actions"

const INITIAL_STATE = {
    items: []
}

export const cartReducer = ((state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.ADD_ITEM:
            return { ...state, items: setCartItems(state.items, action.payload.data) }

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
        items = [...items,{ ...newItem, qyt: 1 }]
    }
    return items
}