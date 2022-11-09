// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSoc7U3w_2hFEUE54GHyTa4thi4fhxBvo",
  authDomain: "video-1cb35.firebaseapp.com",
  projectId: "video-1cb35",
  storageBucket: "video-1cb35.appspot.com",
  messagingSenderId: "317061282895",
  appId: "1:317061282895:web:5c4b1b46595971ec263e3a",
  measurementId: "G-839J1RE36D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
export default app;
