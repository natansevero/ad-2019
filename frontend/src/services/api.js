import axios from 'axios';

let baseURL = 'http://localhost:3333/api/v1';

const api = axios.create({
    baseURL
});

export default api;