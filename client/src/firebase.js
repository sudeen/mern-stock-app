// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-stock-app.firebaseapp.com",
  projectId: "mern-stock-app",
  storageBucket: "mern-stock-app.appspot.com",
  messagingSenderId: "954916261249",
  appId: "1:954916261249:web:df85dd91f4bba7030f2c80",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
