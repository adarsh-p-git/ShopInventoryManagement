// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAznPO4rtwKzDTMaqg6NxP0KlRJns9o2Nk",
  authDomain: "inventorymanagement-44463.firebaseapp.com",
  projectId: "inventorymanagement-44463",
  storageBucket: "inventorymanagement-44463.appspot.com",
  messagingSenderId: "889421697251",
  appId: "1:889421697251:web:1ebb727181cee97aab35d6"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db=getFirestore(firebase)
const auth = getAuth(firebase);
export {auth}
export default db