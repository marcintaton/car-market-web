import axios from "axios";

const baseUrl = "http://localhost:57558/api/"

export default {

    /**
     * Allows communication with part of the API responsible for handling listings
     * @param {*} [url= baseUrl + 'CarListings/'] should be left on default value 
     * @returns {*} action to execute
     */
    carListing(url = baseUrl + 'CarListings/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newListing => axios.post(url, newListing),
            update: (id, updateData) => axios.put(url + id, updateData),
            delete: id => axios.delete(url + id)
        }
    },

    /**
     * Allows communication with part of the API responsible for handling users
     * @param {*} [url = baseUrl + 'Users/'] should be left on default value 
     * @returns {*} action to execute
     */
    user(url = baseUrl + 'Users/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newListing => axios.post(url, newListing),
            update: (id, updateData) => axios.put(url + id, updateData),
            delete: id => axios.delete(url + id)
        }
    },

    /**
     * Allows communication with part of the API responsible for handling direct messages
     * @param {*} [url = baseUrl + 'directmessages/'] should be left on default value 
     * @returns {*} action to execute
     */
    directMessage(url = baseUrl + 'directmessages/') {
        return {
            fetchAll: () => axios.get(url),
            create: newDM => axios.post(url, newDM),
        }
    }
}
