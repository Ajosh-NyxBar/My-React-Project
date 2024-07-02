import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-app-a2d9c.firebaseapp.com",
  projectId: "react-chat-app-a2d9c",
  storageBucket: "react-chat-app-a2d9c.appspot.com",
  messagingSenderId: "459366044444",
  appId: "1:459366044444:web:b9c136faf21d897c1d20d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);