import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL
} from "./actions"

const productListInitialState = {
    products: [],
    isLoading: false,
    error: null
}

export const productList = ((state = productListInitialState, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { ...state, isLoading: true }
        case PRODUCT_LIST_SUCCESS:
            return { ...state, isLoading: false, products: action.payload.data }
        case PRODUCT_LIST_FAIL:
            return { ...state, isLoading: false, products: [], error: action.payload.error }
        default:
            return state
    }

})