import { api } from "../../utils/Api"

/**
 * products list actions types
 */
export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST"
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS"
export const PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL"


/**
 * products list actions creators
 */

export function productsList() {

    return async function (dispatch) {
        try {
            dispatch({ type: PRODUCT_LIST_REQUEST })

            const products = await api("/api/products", {}, "get").then(({ data }) => {
                return data
            })

            dispatch({ type: PRODUCT_LIST_SUCCESS, payload: { data: products } })

        } catch (error) {
            dispatch({ type: PRODUCT_LIST_FAIL, payload: { error: error.response?.data.message || error.message } })

        }

    }
}


/**
 * product details actions types
 */
export const PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST"
export const PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS"
export const PRODUCT_DETAILS_FAIL = "PRODUCT_DETAILS_FAIL"


 /**
  * product details actions creators
  */
 export function productDetails(id) {

    return async function (dispatch) {
        try {
            dispatch({ type: PRODUCT_DETAILS_REQUEST })
            const product = await api(`/api/products/${id}`, {}, "get").then(({ data }) => {
                return data
            })

            dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: { data: product } })

        } catch (error) {
            dispatch({ type: PRODUCT_DETAILS_FAIL, payload: { error: error.response?.data.message || error.message } })

        }

    }

}
