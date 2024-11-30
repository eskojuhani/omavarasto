// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9eRIMy6XpTi61Qh5wEYTH3qWPTHqTgg8",
  authDomain: "esefirebase-e041c.firebaseapp.com",
  databaseURL: "https://esefirebase-e041c-default-rtdb.firebaseio.com",
  projectId: "esefirebase-e041c",
  storageBucket: "esefirebase-e041c.firebasestorage.app",
  messagingSenderId: "656503758605",
  appId: "1:656503758605:web:f692f35c8d9dc3bbfeda44",
  measurementId: "G-MCHV0W1W91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;