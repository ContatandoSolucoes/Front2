import axios from 'axios'

const api = axios.create({
    baseURL : 'http://192.168.148.101:8000'
});

export default api;