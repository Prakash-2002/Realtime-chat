
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCW2gPSLvMrrZmhnWoMkWhasFyLenxesBM",
  authDomain: "realtime-chatapp-fc781.firebaseapp.com",
  projectId: "realtime-chatapp-fc781",
  storageBucket: "realtime-chatapp-fc781.appspot.com",
  messagingSenderId: "1073844511785",
  appId: "1:1073844511785:web:8cae9d86025d0dc9782838"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

