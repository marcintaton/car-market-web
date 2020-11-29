import { combineReducers } from "redux";
import { carListing } from "./CarListing";
import { user } from "./User";
import { session } from "./Session";
import { directMessage } from "./DirectMessage";

/**
 * Combines all reducers 
 */
export const reducers = combineReducers({
    carListing,
    user,
    session,
    directMessage
})