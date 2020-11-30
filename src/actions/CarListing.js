import { LISTING_ACTION_TYPES } from "../ActionTypes"
import api from "./api"

/**
 * action that makes an API call 
 * to get all car listings form the database
 */
export const fetchAll = () => dispatch => {
    api.carListing().fetchAll()
        .then(
            response => {
                dispatch({
                    type: LISTING_ACTION_TYPES.FETCH_ALL,
                    payload: response.data
                })
            }
        )
        .catch(error => console.log(error))
}

/**
 * action that makes an API call 
 * to get spcific listing by Id
 * @param {*} x Id to fetch 
 */
export const fetch = (x) => dispatch => {
    api.carListing().fetchById(x)
        .then(
            response => {
                dispatch({
                    type: LISTING_ACTION_TYPES.FETCH,
                    payload: response.data
                })
            }
        )
        .catch(error => console.log(error))
}

/**
 * Formats data received form form
 * to prepare it for insertion into database
 * @param {*} data data from form
 */
const formatData = data => ({
    ...data,
    dateAdded: parseInt(data.dateAdded ? data.dateAdded : 0),
    userId: parseInt(data.userId ? data.userId : -1),
    productionYear: parseInt(data.productionYear ? data.productionYear : 0),
    mileage: parseInt(data.mileage ? data.mileage : 0),
    price: parseInt(data.price ? data.price : 0),
})

/**
 * action that makes an API call 
 * to create new car listing row from passed data
 * @param {*} data data source
 * @param {*} onSuccess callback to execute on successful creation
 */
export const create = (data, onSuccess) => dispatch => {
    data = formatData(data)
    console.log(data.userId)
    console.log(data.dateAdded)
    api.carListing().create(data).then(response => {
        dispatch({
            type: LISTING_ACTION_TYPES.CREATE,
            payload: response.data
        })
        onSuccess(response.data.id)
    }).catch(error => console.log(error))
}

/**
 * action that makes an API call 
 * to update existing row in database 
 * @param {*} id Id of listing to modify
 * @param {*} data updated data
 * @param {*} onSuccess callback to execute on successful update
 */
export const update = (id, data, onSuccess) => dispatch => {
    data = formatData(data)
    api.carListing().update(id, data).then(response => {
        dispatch({
            type: LISTING_ACTION_TYPES.UPDATE,
            payload: { id, ...data }
        })
        onSuccess(id)
    }).catch(error => console.log(error))
}

/**
 * action that makes an API call 
 * to delete existing row in database 
 * @param {*} id Id of listing to delete
 * @param {*} onSuccess callback to execute on successful deletion
 */
export const deleteListing = (id, onSuccess) => dispatch => {
    api.carListing().delete(id).then(response => {
        dispatch({
            type: LISTING_ACTION_TYPES.DELETE,
            payload: id
        })
        onSuccess()
    }).catch(error => console.log(error))
}

/**
 * store current filter settings
 * @param {*} filterString settings to sotre
 */
export const filter = (filterString) => dispatch => {
    dispatch({
        type: LISTING_ACTION_TYPES.FILTER,
        payload: filterString
    })
}