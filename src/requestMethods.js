import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGY3NGJkZjc5ZTU5ZWM3YmZkNTMwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjY0NTUwMiwiZXhwIjoxNjYyOTA0NzAyfQ.-RJJbTR_MJ-A8jKjaeVB5TF60vpzprlfQvxdgGrL7_w";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})