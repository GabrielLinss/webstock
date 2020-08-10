import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3333",
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Accept': 'application/json'
    }
});

export default api;
