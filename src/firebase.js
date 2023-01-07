// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_CFYXBFZmQNSJvEzTXD3eIYy7tbYBD-I",
  authDomain: "loginpage-24ad9.firebaseapp.com",
  projectId: "loginpage-24ad9",
  storageBucket: "loginpage-24ad9.appspot.com",
  messagingSenderId: "1077848335712",
  appId: "1:1077848335712:web:b05e5d3b9f699ad17baa05",
  measurementId: "G-1STKTF7M41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);