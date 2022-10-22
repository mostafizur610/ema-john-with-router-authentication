// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQoOWpFgwfu1uoiLSTDIx92t26jdZn_hc",
    authDomain: "ema-john-auth-f11d0.firebaseapp.com",
    projectId: "ema-john-auth-f11d0",
    storageBucket: "ema-john-auth-f11d0.appspot.com",
    messagingSenderId: "90288629704",
    appId: "1:90288629704:web:6e991d70da24b039c002fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;