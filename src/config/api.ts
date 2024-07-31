import axios from "axios";

export const baseUrl = import.meta.env.VITE_BACKEND_HOST;

export const http = axios.create({
    baseURL: baseUrl,
    headers: {
        Accept: "application/json"
    }
})