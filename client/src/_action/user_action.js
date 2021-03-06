import axios from "axios";
import { response } from "express";
import { AUTH_USER, LOGIN_USER, REGISTER_USER } from "./types";



export function loginUser(dataTosubmit) {
    const request = axios.post('/api/users/login', AxiosRequestConfig)
        .then(response => response.data)
    
    return {
        type: LOGIN_USER,
        payload: request
    }

}

export function registerUser() {
    const request = axios.get('/api/users/auth')
        .then(response => response.data)
    
    return {
        type: AUTH_USER,
        payload: request
    }

}

