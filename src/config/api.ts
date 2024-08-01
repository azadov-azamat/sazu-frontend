import axios from "axios";

const language = localStorage.getItem('i18nextLng');

export const baseUrl = `${import.meta.env.VITE_BACKEND_HOST}/${language}/api/v1`;

export const http = axios.create({
    baseURL: baseUrl,
    headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        ContentType: "application/json"
    }
})