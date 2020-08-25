import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3334",
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Accept': 'application/json'
    }
});

export default api;
