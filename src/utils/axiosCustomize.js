import axios from "axios";
import { store } from "../redux/store";


const instance = axios.create({
    baseURL: 'http://localhost:8080/',
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    const accessToken = store?.getState()?.auth?.account?.accessToken
    config.headers["Authorization"] = "Bearer " + accessToken
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
}, function (error) {
    console.log(error.response)
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 403||error.response.status === 401) {
        window.location.href = '/login';
    }
    return error && error.response && error.response.data
        ? error.response.data : Promise.reject(error)
});

export default instance