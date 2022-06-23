// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage}  from  "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXlzc-4kcRPckCaPjnCkxnGdhPfeZ2MK0",
  authDomain: "task-list-764c8.firebaseapp.com",
  projectId: "task-list-764c8",
  storageBucket: "task-list-764c8.appspot.com",
  messagingSenderId: "84500627081",
  appId: "1:84500627081:web:6b13153aa7a9d8872c5058",
  measurementId: "G-Q70DXFEQDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage=getStorage(app);

export{
    db,
    storage
}