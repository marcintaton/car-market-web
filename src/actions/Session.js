import { SESSION_ACTION_TYPES } from "../ActionTypes"
import api from "./api"

export const fetch = (x) => dispatch => {
    api.user().fetchById(x)
        .then(
            response => {
                dispatch({
                    type: SESSION_ACTION_TYPES.FETCH_AUTH_USER,
                    payload: response.data
                })
            }
        )
        .catch(error => console.log(error))
}