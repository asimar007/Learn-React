import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqYIK-KcUgvR9CuytgKAPv_A-8vMoDgOI",
    authDomain: "fir-efefb.firebaseapp.com",
    projectId: "fir-efefb",
    storageBucket: "fir-efefb.firebasestorage.app",
    messagingSenderId: "518629585612",
    appId: "1:518629585612:web:5b3ec47a4374de0b1b8869",
    databaseURL: "https://fir-efefb-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);