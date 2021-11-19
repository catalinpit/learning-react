import axios from "axios";
const baseURL = "https://afternoon-chamber-77094.herokuapp.com/api/persons";

const getAll = () => {
    const request = axios.get(baseURL);

    return request.then(response => response.data);
};

const addPerson = newPerson => {
    const request = axios.post(baseURL, newPerson);

    return request.then(response => response.data);
};

export default {
    getAll,
    addPerson
};