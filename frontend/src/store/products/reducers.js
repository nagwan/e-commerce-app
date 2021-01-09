import  * as actions  from "./actions"

const globalState = {
    isLoading: false,
    error: null
}

const productListInitialState = {
    ...globalState,
    products: [],

}

export const productList = ((state = productListInitialState, action) => {
    switch (action.type) {
        case actions.PRODUCT_LIST_REQUEST:
            return { ...state, isLoading: true }
        case actions.PRODUCT_LIST_SUCCESS:
            return { ...state, isLoading: false, products: action.payload.data }
        case actions.PRODUCT_LIST_FAIL:
            return { ...state, isLoading: false, products: [], error: action.payload.error }
        default:
            return state
    }
})

