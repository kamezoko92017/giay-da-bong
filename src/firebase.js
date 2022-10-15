// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHXwKlrRgAlVPG_VPurFz_27YhHva1yx0",
    authDomain: "shop-7c2bd.firebaseapp.com",
    projectId: "shop-7c2bd",
    storageBucket: "shop-7c2bd.appspot.com",
    messagingSenderId: "193819273425",
    appId: "1:193819273425:web:5693d8334990e114e7bdf0"
};

console.log('firebaseConfig: ', firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;