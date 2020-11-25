import { combineReducers } from "redux";
import { carListing } from "./CarListing";
import { user } from "./User";
import { session } from "./Session";
import { directMessage } from "./DirectMessage";

export const reducers = combineReducers({
    carListing,
    user,
    session,
    directMessage
})