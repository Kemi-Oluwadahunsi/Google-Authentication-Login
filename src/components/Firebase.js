
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider , signInWithPopup} from "firebase/auth";
// require('dotenv').config();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "process.env.REACT_APP_API_KEY",
  authDomain: "process.env.REACT_APP_AUTH_DOMAIN",
  projectId: "process.env.REACT_APP_PROJECT_ID",
  storageBucket: "process.env.REACT_APP_STORAGE_BUCKET",
  messagingSenderId:" process.env.REACT_APP_SENDER_ID",
  appId: "process.env.REACT_APP_APP_ID",
  measurementId: "process.env.REACT_APP_MEASUREMENT_ID"
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

// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });