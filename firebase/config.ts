// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider  , FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8K4IsAVVSnZAnX8Vp_ZHTHGbR4qj609M",
  authDomain: "booking-app-378907.firebaseapp.com",
  projectId: "booking-app-378907",
  storageBucket: "booking-app-378907.appspot.com",
  messagingSenderId: "423728017803",
  appId: "1:423728017803:web:8c69c7ca9ee58938ecff8e",
  measurementId: "G-V6DRXDEH13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const providerGoogle = new GoogleAuthProvider()
export const providerFacebook = new FacebookAuthProvider()
export const auth = getAuth();
const analytics = getAnalytics(app);