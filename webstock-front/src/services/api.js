import axios from "axios";
import { getToken } from './auth'

const api = axios.create({
    baseURL: "http://localhost:3334",
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Accept': 'application/json'
    }
});

api.interceptors.request.use(config => {
    const token = getToken()

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

export default api;
