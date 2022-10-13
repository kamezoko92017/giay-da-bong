import axios from 'axios';

const BASE_URL = "https://giay-da-bong.herokuapp.com/api/";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGY3NGJkZjc5ZTU5ZWM3YmZkNTMwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzY0MDk2OSwiZXhwIjoxNjYzOTAwMTY5fQ.M0pbIatvEaUr-bfdPVdurk1iX3OfYqP2HNvZhN13HSY";
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