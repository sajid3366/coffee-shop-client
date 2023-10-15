// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvFrbQBJJSUQ0qQlEFe0vtcwNvI65AL8o",
  authDomain: "coffee-shop-auth.firebaseapp.com",
  projectId: "coffee-shop-auth",
  storageBucket: "coffee-shop-auth.appspot.com",
  messagingSenderId: "671686341756",
  appId: "1:671686341756:web:fc4a801cdb75ed43d5c5f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;