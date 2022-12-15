// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArhZnhiYRctPZwnvSCad3qF1y9YoT7ie4",
  authDomain: "linkedin-clone-ea5fa.firebaseapp.com",
  projectId: "linkedin-clone-ea5fa",
  storageBucket: "linkedin-clone-ea5fa.appspot.com",
  messagingSenderId: "560529544733",
  appId: "1:560529544733:web:facedb33832520fcec98f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
