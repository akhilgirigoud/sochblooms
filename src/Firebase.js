// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAMVTH1d1XH1wrMuHQfL5ylMALHUZNaqzo",
  authDomain: "ecommerce-e2e95.firebaseapp.com",
  projectId: "ecommerce-e2e95",
  storageBucket: "ecommerce-e2e95.appspot.com",
  messagingSenderId: "220808067960",
  appId: "1:220808067960:web:b5d3ec58a2feeacf17668d",
  measurementId: "G-4H4ECEBFBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;
