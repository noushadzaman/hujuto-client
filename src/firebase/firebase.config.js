// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8f9qYMEe1zHi8NUPQa7VBAeiGTN3Ui_Y",
  authDomain: "hujuto.firebaseapp.com",
  projectId: "hujuto",
  storageBucket: "hujuto.appspot.com",
  messagingSenderId: "68972511144",
  appId: "1:68972511144:web:3a81dbaebef80e8600e79d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
