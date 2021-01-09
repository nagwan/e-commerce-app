import { api } from "../../utils/Api"
import getCookie from "../../utils/getCookie"

/**
 * user login && logout  actions types
 */
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL"

export const USER_LOGOUT = "USER_LOGOUT"
export const USER_LOGOUT_FAIL = "USER_LOGOUT_FAIL"


/**
 * user login  actions creators
 */

export function userLogin(data, routerHistory) {

    return async function (dispatch) {
        try {
            dispatch({ type: USER_LOGIN_REQUEST })

            const user = await api("api/users/login", data, "post").then(({ data }) => {
                return data
            })

            document.cookie = `TOKEN=${user.token}; expires=${new Date().getDate() + 30 * 24 * 60 * 60 * 1000} `

            dispatch({ type: USER_LOGIN_SUCCESS, payload: { data: user } })
            routerHistory.push("/")

        } catch (error) {
            dispatch({ type: USER_LOGIN_FAIL, payload: { error: error.response?.data.message || error.message } })

        }
    }
}


export function userLogout(routerHistory) {

    return async function (dispatch) {
        try {
            dispatch({ type: USER_LOGOUT })
            document.cookie = `TOKEN=`
            routerHistory.push("/")
        } catch (error) {
            console.log(error)
        }
    }
}




/**
 * user register  actions types
 */
export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST"
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS"
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL"


/**
 * user register  actions creators
 */

export function userRegister(data, routerHistory) {

    return async function (dispatch) {
        try {
            dispatch({ type: USER_REGISTER_REQUEST })

            const user = await api("api/users", data, "post").then(({ data }) => {
                return data
            })

            document.cookie = `TOKEN=${user.token}; expires=${new Date().getDate() + 30 * 24 * 60 * 60 * 1000} `

            dispatch({ type: USER_REGISTER_SUCCESS, payload: { data: user } })
            routerHistory.push("/")

        } catch (error) {
            dispatch({ type: USER_REGISTER_FAIL, payload: { error: error.response?.data.message || error.message } })

        }

    }
}


/**
 * user profile actions types
 */
export const USER_PROFILE_REQUEST = "USER_PROFILE_REQUEST"
export const USER_PROFILE_SUCCESS = "USER_PROFILE_SUCCESS"
export const USER_PROFILE_FAIL = "USER_PROFILE_FAIL"


/**
 * user profile actions creators
 */

export function userProfile() {


    return async function (dispatch) {

        let token = getCookie("TOKEN")

        try {
            dispatch({ type: USER_PROFILE_REQUEST })

            const user = await api("api/users/profile", {}, "get", {}, token).then(({ data }) => {
                return data
            })

            dispatch({ type: USER_PROFILE_SUCCESS, payload: { data: user } })

        } catch (error) {
            dispatch({ type: USER_PROFILE_FAIL, payload: { error: error.response?.data.message || error.message } })

        }

    }
}

