import { act } from "react-dom/test-utils";
import { USER_ACTION_TYPES } from "../ActionTypes";

const initalState = {
    list: [],
    listingAuthor: {}
}

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