import axios from "axios";

export const client = () => {
   const accessToken = localStorage.getItem('token');
   const config = axios.create({
        baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}`|| 'http://127.0.0.1:3000/api/v1/',
        headers: {
            "Content-Type": "Application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    });
    return config;
}