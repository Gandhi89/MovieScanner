import axios from 'axios';

const BASE_URL = "https://www.omdbapi.com/";
const API_KEY = "62087cc1";

export const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Accept': "application/json"
    },
    params: {
        apikey: API_KEY
    }
});

