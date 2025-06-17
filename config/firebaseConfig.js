// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfSVCcCeoUN907Ekwx8PJIzVDv_2x4u2U",
  authDomain: "dine-and-wine.firebaseapp.com",
  projectId: "dine-and-wine",
  storageBucket: "dine-and-wine.firebasestorage.app",
  messagingSenderId: "274770991029",
  appId: "1:274770991029:web:3290ca5f29436f55166bfc",
  measurementId: "G-W2S68BX9MX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);