// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlMvoJZbEQmE-SGlAZSbdaVAt1a09l73g",
  authDomain: "test-auth-bbea6.firebaseapp.com",
  projectId: "test-auth-bbea6",
  storageBucket: "test-auth-bbea6.appspot.com",
  messagingSenderId: "751442616852",
  appId: "1:751442616852:web:e148bcafe6440cb680bd01"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH= getAuth(FIREBASE_APP);
export const FIRESTORE_DB=getFirestore(FIREBASE_APP);