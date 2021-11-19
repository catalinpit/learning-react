import axios from "axios";
const baseURL = 'https://blooming-crag-32997.herokuapp.com/api/notes';

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data);
};

const create = newObject => {
    const request = axios.post(baseURL, newObject);
    return request.then(response => response.data);
};

const update = (id, newObject) => {
    const request = axios.put(`${baseURL}/${id}`, newObject);
    return request.then(response => response.data);
};

export default {
    getAll,
    create,
    update
};