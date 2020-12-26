export const ADD_ITEM = "ADD_ITEM"
export const REMOVE_ITEM = "REMOVE_ITEM"


export function addItem(payload) {
    return { type: ADD_ITEM, payload }
}

export function removeItem(payload) {
    return { type: REMOVE_ITEM, payload }
}



