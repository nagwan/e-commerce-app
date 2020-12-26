import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from 'redux-devtools-extension'
import {productList, productDetails} from "./products/reducers"
const reducer = combineReducers({
    productList,
    productDetails
})

const initialState = {}

const middleware  = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store