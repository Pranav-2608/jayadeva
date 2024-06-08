// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC-iDLRZzCiP1uDivE2YjwWOKK-tDnUaX4",
  authDomain: "jayadeva-hospital-8962c.firebaseapp.com",
  projectId: "jayadeva-hospital-8962c",
  storageBucket: "jayadeva-hospital-8962c.appspot.com",
  messagingSenderId: "63415459557",
  appId: "1:63415459557:web:660fd347a37a3242b2fe0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  storage=getStorage(app);