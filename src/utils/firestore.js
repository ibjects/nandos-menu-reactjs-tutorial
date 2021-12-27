// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "ADD_YOUR_API_KEY",
    authDomain: "ADD_YOUR_AUTH_DOMAIN",
    databaseURL: "ADD_YOUR_DDATABASE_URL",
    projectId: "ADD_YOUR_PROJECT_ID",
    storageBucket: "ADD_YOUR_STORSGE_BUCKET",
    messagingSenderId: "ADD_YOUR_MESSAGING_SENDER_ID",
    appId: "ADD_YOUR_APP_ID",
    measurementId: "ADD_YOUR_MESAUREMENT_ID"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { db };