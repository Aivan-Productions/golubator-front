import axios from 'axios';



const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 5000,
    headers: {
        'accept': 'application/json',
    },
});


instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
);

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Error with get data", error)
        return Promise.reject(error);
    }
);

export default instance;
