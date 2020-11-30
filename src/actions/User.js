import { USER_ACTION_TYPES } from "../ActionTypes"
import api from "./api"

/**
 * action that makes an API call 
 * to get all users form the database
 */
export const fetchAll = () => dispatch => {
    api.user().fetchAll()
        .then(
            response => {
                dispatch({
                    type: USER_ACTION_TYPES.FETCH_ALL,
                    payload: response.data
                })
            }
        )
        .catch(error => console.log(error))
}

/**
 * action that makes an API call 
 * to get spcific user by Id
 * @param {*} x Id to fetch 
 */
export const fetch = (x) => dispatch => {
    api.user().fetchById(x)
        .then(
            response => {
                dispatch({
                    type: USER_ACTION_TYPES.FETCH,
                    payload: response.data
                })
            }
        )
        .catch(error => console.log(error))
}