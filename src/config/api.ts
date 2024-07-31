import axios from "axios";

export const baseUrl = "https://back.sazumedia.com/en/api/v1";
export const uri = ""

export const getToken = () => localStorage.getItem("TOKEN")

export const getAuthorizationHeader = (): string => `${getToken()}`;

export const http = axios.create({
    baseURL: baseUrl,
    headers: {
        Accept: "application/json"
    }
})

export const http_auth = axios.create({
    baseURL: baseUrl,
    headers: {
        AccessControlAllowOrigin: "*",
        ContentType: "application/json",
        authorization: getToken()
    }
})