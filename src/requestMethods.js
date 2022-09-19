import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGY3NGJkZjc5ZTU5ZWM3YmZkNTMwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjY0NTUwMiwiZXhwIjoxNjYyOTA0NzAyfQ.-RJJbTR_MJ-A8jKjaeVB5TF60vpzprlfQvxdgGrL7_w";
let TOKEN = "";
if (JSON.parse(localStorage.getItem("persist:root"))) {
    if (JSON.parse(localStorage.getItem("persist:root")).user) {
        if (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser) {
            TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
        }
    }
}


console.log("TOKEN: ", TOKEN);

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
})