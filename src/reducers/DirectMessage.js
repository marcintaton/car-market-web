import { DM_ACTION_TYPES } from "../ActionTypes";

/**
 * Stored state of data regarding direct messages
 */
const initalState = {
    list: []
}

/**
 * Redux Reducer managing the state of stored direct messages
 * @param {*} state stored state
 * @param {*} action action type to take
 * @returns requested data, depending on action type
 */
export const directMessage = (state = initalState, action) => {
    switch (action.type) {
        case DM_ACTION_TYPES.FETCH_ALL:
            console.log(action.payload)
            return {
                ...state,
                list: [...action.payload]
            }
        case DM_ACTION_TYPES.CREATE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        default:
            return state
    }
}