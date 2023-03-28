// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJtnOn1GUN5pJzD77SSXzAhtC8XMkqEjw",
  authDomain: "rj-stockapp.firebaseapp.com",
  projectId: "rj-stockapp",
  storageBucket: "rj-stockapp.appspot.com",
  messagingSenderId: "554758252484",
  appId: "1:554758252484:web:c10b81c84ddde634916691"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth