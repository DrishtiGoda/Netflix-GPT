// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTWShGPB7h5dTh1xd17N-E3ortQr0dONk",
  authDomain: "netflix-gpt-55fe2.firebaseapp.com",
  projectId: "netflix-gpt-55fe2",
  storageBucket: "netflix-gpt-55fe2.appspot.com",
  messagingSenderId: "1077454158546",
  appId: "1:1077454158546:web:f1e73421992443a9550b0b",
  measurementId: "G-X5Z5ZC94GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();