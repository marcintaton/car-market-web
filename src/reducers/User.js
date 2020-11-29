import { act } from "react-dom/test-utils";
import { USER_ACTION_TYPES } from "../ActionTypes";

/**
 * Stored state of data regarding users
 */
const initalState = {
    list: [],
    listingAuthor: {}
}

/**
 * Redux Reducer managing the state of stored users
 * @param {*} state stored state
 * @param {*} action action type to take
 * @returns requested data, depending on action type
 */
export const user = (state = initalState, action) => {
    switch (action.type) {
        case USER_ACTION_TYPES.FETCH_ALL:
            console.log(action.payload)
            return {
                ...state,
                list: [...action.payload]
            }
        case USER_ACTION_TYPES.FETCH:
            console.log(action.payload)
            return {
                ...state,
                listingAuthor: action.payload
            }
        default:
            return state
    }
}