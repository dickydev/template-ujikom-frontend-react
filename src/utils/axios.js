import axios from "axios";

const api = axios.create({
    baseURL: 'http://locahost:5500',
    withCredentials: true
})

export default api