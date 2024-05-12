import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDG32ekF81gnF-3ZVu1JWVVMnHUJ88cONY",
  authDomain: "woodie-72efb.firebaseapp.com",
  projectId: "woodie-72efb",
  storageBucket: "woodie-72efb.appspot.com",
  messagingSenderId: "279922647666",
  appId: "1:279922647666:web:26f8d27667f19a70b4d8eb",
  measurementId: "G-M8SRT91PFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);


