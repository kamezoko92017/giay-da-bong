import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGY3NGJkZjc5ZTU5ZWM3YmZkNTMwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTk1NzU1MSwiZXhwIjoxNjYyMjE2NzUxfQ.5pCUWozapPi6EaOsLY20cITCW9tm9tHvOmN75U13dV4";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})