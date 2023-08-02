// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//allows to conect to Firebase db
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlcC4pFvAfBfVYvULAavT1qs5R4RJy0iQ",
  authDomain: "fir-august-af67a.firebaseapp.com",
  projectId: "fir-august-af67a",
  storageBucket: "fir-august-af67a.appspot.com",
  messagingSenderId: "285341873399",
  appId: "1:285341873399:web:fda6b0e893f77b3121cff2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//set up db and export it
export const db = getFirestore(app);