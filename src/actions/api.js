import axios from "axios";

const baseUrl = "http://localhost:57558/api/"

export default {

    carListing(url = baseUrl + 'CarListings/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newListing => axios.post(url, newListing),
            update: (id, updateData) => axios.put(url + id, updateData),
            delete: id => axios.delete(url + id)
        }
    },

    user(url = baseUrl + 'Users/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newListing => axios.post(url, newListing),
            update: (id, updateData) => axios.put(url + id, updateData),
            delete: id => axios.delete(url + id)
        }
    },

    directMessage(url = baseUrl + 'directmessages/') {
        return {
            fetchAll: () => axios.get(url),
            create: newDM => axios.post(url, newDM),
        }
    }
}
