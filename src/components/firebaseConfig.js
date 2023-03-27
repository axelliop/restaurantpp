// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTkay-2fsmda3oKmyW79Ul7qfJS0MUZR0",
  authDomain: "restaurantpp-3b7a0.firebaseapp.com",
  projectId: "restaurantpp-3b7a0",
  storageBucket: "restaurantpp-3b7a0.appspot.com",
  messagingSenderId: "648199848432",
  appId: "1:648199848432:web:3bfafe29dab747b1635d35",
  measurementId: "G-J2D8ZLPP4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);