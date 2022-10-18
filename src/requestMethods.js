import axios from 'axios';

// const BASE_URL = "https://giay-da-bong.herokuapp.com/api/";
const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGY3NGJkZjc5ZTU5ZWM3YmZkNTMwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzY2MDE1NywiZXhwIjoxNjYzOTE5MzU3fQ.OuN-KJN_jpB7jUc-CgAVYjBwaM5O9c4iTP2E2_0pxtI\"
let TOKEN = "";
// if (JSON.parse(localStorage.getItem("persist:root"))) {
//     if (JSON.parse(localStorage.getItem("persist:root")).user) {
//         if (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser) {
//             TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
//         }
//     }
// }

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const publicRequestLoginSocial = axios.create({
    baseURL: "http://localhost:5000/",
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})