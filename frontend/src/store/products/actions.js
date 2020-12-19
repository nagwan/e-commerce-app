import { api } from "../../utils/Api"

/**
 * action types
 */
export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST"
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS"
export const PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL"


/**
 * action creators
 */

export function productsList() {

    return async function (dispatch) {
        try {
            dispatch({ type: PRODUCT_LIST_REQUEST })

            const products = await api("api/products", {}, "get").then(({ data }) => {
                return data
            })

            dispatch({ type: PRODUCT_LIST_SUCCESS, payload: { data: products } })

        } catch (error) {
            dispatch({ type: PRODUCT_LIST_FAIL, payload: { error: error.response?.data.message || error.message } })

        }

    }

}