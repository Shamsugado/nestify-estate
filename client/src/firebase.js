// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nestify-estate.firebaseapp.com",
  projectId: "nestify-estate",
  storageBucket: "nestify-estate.firebasestorage.app",
  messagingSenderId: "1068178756624",
  appId: "1:1068178756624:web:831844a0758f3c1170a695"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);