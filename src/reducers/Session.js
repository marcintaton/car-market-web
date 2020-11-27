import { SESSION_ACTION_TYPES } from "../ActionTypes";

const initalState = {
    authUserId: 1,
    authUser: {}
}

export const session = (state = initalState, action) => {
    switch (action.type) {
        case SESSION_ACTION_TYPES.FETCH_AUTH_USER:
            console.log(action.payload)
            return {
                ...state,
                authUser: action.payload
            }
        default:
            return state
    }
}