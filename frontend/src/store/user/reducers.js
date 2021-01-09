import  * as actions  from "./actions"

const initialState = {
    isLoading: false,
    error: null,
    user: {},
}

export const userReducer = ((state = initialState, action) => {
    switch (action.type) {
        case actions.USER_LOGIN_REQUEST || actions.USER_REGISTER_REQUEST || actions.USER_PROFILE_REQUEST:
            return { ...state, isLoading: true }
        case actions.USER_LOGIN_SUCCESS || actions.USER_REGISTER_SUCCESS || actions.USER_PROFILE_SUCCESS:
            return { ...state, isLoading: false, user: action.payload.data }
        case actions.USER_LOGIN_FAIL || actions.USER_REGISTER_FAIL || actions.USER_PROFILE_FAIL:
            return { ...state, isLoading: false, user: {}, error: action.payload.error }
        case actions.USER_LOGOUT:
            return initialState
        default:
            return state
    }
})




