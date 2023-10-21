

// Import the functions you need from the SDKs you need
import { GoogleOAuthProvider } from "@react-oauth/google";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider , signInWithPopup} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKv89x80FP8MbnEEsdNtwuV6Rm1zT3J9Y",
  authDomain: "authentication-51a84.firebaseapp.com",
  projectId: "authentication-51a84",
  storageBucket: "authentication-51a84.appspot.com",
  messagingSenderId: "696016212681",
  appId: "1:696016212681:web:77b6a1af7517163fb3f318",
  measurementId: "G-JMLWE6YMZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);

 const provider = new GoogleAuthProvider() ;

  export  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
    console.log(error);
    
 })
};