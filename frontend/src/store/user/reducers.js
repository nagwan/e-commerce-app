import  * as actions  from "./actions"

const initialState = {
    isLoading: false,
    error: null,
    user: {},
}

export const userReducer = ((state = initialState, action) => {
    switch (action.type) {
        case actions.USER_LOGIN_REQUEST: 
        case actions.USER_REGISTER_REQUEST:
        case actions.USER_PROFILE_REQUEST:
        case actions.USER_UPDATE_PROFILE_REQUEST:
            return { ...state, isLoading: true }
        case actions.USER_LOGIN_SUCCESS:
        case actions.USER_REGISTER_SUCCESS:
        case actions.USER_PROFILE_SUCCESS:
        case actions.USER_UPDATE_PROFILE_SUCCESS:
            return { ...state, error: null, isLoading: false, user: action.payload.data }
        case actions.USER_LOGIN_FAIL:
        case actions.USER_REGISTER_FAIL:
        case actions.USER_PROFILE_FAIL:
            return { ...state, isLoading: false, user: {}, error: action.payload.error }
        case actions.USER_UPDATE_PROFILE_FAIL:
            return { ...state, isLoading: false, error: action.payload.error }
        case actions.USER_LOGOUT:
            return initialState
        default:
            return state
    }
})




