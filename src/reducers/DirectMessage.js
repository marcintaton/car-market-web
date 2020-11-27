import { DM_ACTION_TYPES } from "../ActionTypes";

const initalState = {
    list: []
}

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