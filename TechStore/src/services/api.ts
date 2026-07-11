import axios from 'axios';
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';
const api = axios.create({
    baseURL,
    headers:{
        "Content-Type": "application/json",
    }
});

api.interceptors.request.use((config)=> {
    const token=localStorage.getItem("sparky_token");
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error)=>{
        if(error.response  && error.response.status === 401){
            localStorage.removeItem("sparky_token");
            localStorage.removeItem("sparky_user");
        }
        return Promise.reject(error);
    }
);

export default api;