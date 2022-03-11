// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY5vMwSnfrVRppM_SXlL2s9JL2urVsr9o",
  authDomain: "insta-clone-devendra.firebaseapp.com",
  projectId: "insta-clone-devendra",
  storageBucket: "insta-clone-devendra.appspot.com",
  messagingSenderId: "782252580503",
  appId: "1:782252580503:web:f1da3d03d9207a835013d2",
  measurementId: "G-81262X852B"
};

// Initialize Firebase
const app = !getApps().kength ?  initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage}