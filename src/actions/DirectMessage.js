import { DM_ACTION_TYPES } from "../ActionTypes"
import api from "./api"

export const fetchAll = () => dispatch => {
    api.directMessage().fetchAll()
        .then(
            response => {
                dispatch({
                    type: DM_ACTION_TYPES.FETCH_ALL,
                    payload: response.data
                })
            }
        )
        .catch(error => console.log(error))
}

const formatData = data => ({
    ...data,
    timePosted: parseInt(data.timePosted ? data.timePosted : -1),
    userIdFrom: parseInt(data.userIdFrom ? data.userIdFrom : -1),
    userIdTo: parseInt(data.userIdTo ? data.userIdTo : 0),
})


export const create = (data, onSuccess) => dispatch => {
    data = formatData(data)
    api.directMessage().create(data).then(response => {
        dispatch({
            type: DM_ACTION_TYPES.CREATE,
            payload: response.data
        })
        onSuccess(response.data.id)
    }).catch(error => console.log(error))
}