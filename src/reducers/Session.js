import { SESSION_ACTION_TYPES } from "../ActionTypes";

/**
 * Stored state of data regarding session data
 */
const initalState = {
    authUserId: 1,
    authUser: {}
}

/**
 * Redux Reducer managing the state of stored session data
 * @param {*} state stored state
 * @param {*} action action type to take
 * @returns requested data, depending on action type
 */
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