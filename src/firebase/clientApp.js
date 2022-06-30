import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_TVLAB8dqpr13-iNnejxXLqMbWM1jBv0",
  authDomain: "canteena-58c0c.firebaseapp.com",
  projectId: "canteena-58c0c",
  storageBucket: "canteena-58c0c.appspot.com",
  messagingSenderId: "711810495806",
  appId: "1:711810495806:web:f0215444bb1231645e686f",
  measurementId: "G-E1187SSC58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
