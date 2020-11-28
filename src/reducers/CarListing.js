import { LISTING_ACTION_TYPES } from "../ActionTypes";

const initalState = {
    list: [],
    currentListing: {},
    filter: ''
}

export const carListing = (state = initalState, action) => {
    switch (action.type) {
        case LISTING_ACTION_TYPES.FETCH_ALL:
            console.log(action.payload)
            return {
                ...state,
                list: [...action.payload]
            }
        case LISTING_ACTION_TYPES.FETCH:
            console.log(action.payload)
            return {
                ...state,
                currentListing: action.payload
            }
        case LISTING_ACTION_TYPES.CREATE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case LISTING_ACTION_TYPES.UPDATE:
            return {
                ...state,
                list: state.list.map(x => x.id == action.payload.id ? action.payload : x)
            }
        case LISTING_ACTION_TYPES.DELETE:
            return {
                ...state,
                list: state.list.filter(x => x.id != action.payload.id)
            }
        case LISTING_ACTION_TYPES.FILTER:
            return {
                ...state,
                filter: action.payload
            }

        default:
            return state
    }
}