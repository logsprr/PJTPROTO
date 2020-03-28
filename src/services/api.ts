import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apibackendprotonative.herokuapp.com/'
});
export default api;