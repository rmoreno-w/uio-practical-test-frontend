import axios from 'axios';

export const baseServerURL = 'http://127.0.0.1:5000';

export const apiClient = axios.create({
    baseURL: baseServerURL,
});
