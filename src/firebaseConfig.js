
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCeNlGtB6PwLLSOXR3XcJrcRxoR4NSiheE",
  authDomain: "bartapas-c57fe.firebaseapp.com",
  projectId: "bartapas-c57fe",
  storageBucket: "bartapas-c57fe.appspot.com",
  messagingSenderId: "570158077288",
  appId: "1:570158077288:web:7465b4cf26a1d1c81bb2dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;