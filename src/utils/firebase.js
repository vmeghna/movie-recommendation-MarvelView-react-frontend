// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfthvC5lUAL-Z1r9OWtkTZYFQ6-Y7MtSg",
  authDomain: "marvelmix-movie.firebaseapp.com",
  projectId: "marvelmix-movie",
  storageBucket: "marvelmix-movie.appspot.com",
  messagingSenderId: "756132197736",
  appId: "1:756132197736:web:24a038cbc111442f9c52dd",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
