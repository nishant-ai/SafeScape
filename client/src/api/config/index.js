import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.safescape.biz' || 'http://localhost:8000'
});

export default instance;