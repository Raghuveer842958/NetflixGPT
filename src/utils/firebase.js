// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYOBfD4qUA_SxszZW4Z4hB37TB0aiRsIw",
  authDomain: "newgpt-402fd.firebaseapp.com",
  projectId: "newgpt-402fd",
  storageBucket: "newgpt-402fd.firebasestorage.app",
  messagingSenderId: "552085385931",
  appId: "1:552085385931:web:acd125403037575903e14e",
  measurementId: "G-7ZPYGZ7633"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();