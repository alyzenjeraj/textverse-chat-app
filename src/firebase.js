// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDfM5sc8ZY-Wui74UEs7vZbh28z1cnsNDk",
  authDomain: "textverse-16f3a.firebaseapp.com",
  projectId: "textverse-16f3a",
  storageBucket: "textverse-16f3a.appspot.com",
  messagingSenderId: "235402535408",
  appId: "1:235402535408:web:ec7bcdbe9eaefcb8cefd35"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);