import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from 'redux-devtools-extension'
import {productList} from "./products/reducers"
import {cartReducer as cart} from "./cart/reducers"
import {userReducer as user} from "./user/reducers"


const reducer = combineReducers({
    productList,
    cart,
    user
})

const initialState = {}

const middleware  = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store