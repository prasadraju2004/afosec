// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhqfj6-ARKAF6Pi8tpAuMcsFgykNfBmjc",
  authDomain: "afosec-8e7fe.firebaseapp.com",
  projectId: "afosec-8e7fe",
  storageBucket: "afosec-8e7fe.firebasestorage.app",
  messagingSenderId: "711419094358",
  appId: "1:711419094358:web:8e486a914118a55f79a2f7",
  measurementId: "G-Z70BVFEB62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);