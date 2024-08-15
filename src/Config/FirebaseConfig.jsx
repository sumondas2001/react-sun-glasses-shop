// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyCcDCEptQmOSvsUsCUB4f1bH_-ipaaEoiY",
     authDomain: "react-sun-glasses-shop.firebaseapp.com",
     projectId: "react-sun-glasses-shop",
     storageBucket: "react-sun-glasses-shop.appspot.com",
     messagingSenderId: "501689504497",
     appId: "1:501689504497:web:682752795cac1f31054f50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);