
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAjUj1mFBTIFHIIiN3U6grrNQyxS4jhi44",
    authDomain: "todo-320cf.firebaseapp.com",
    projectId: "todo-320cf",
    storageBucket: "todo-320cf.appspot.com",
    messagingSenderId: "430764443953",
    appId: "1:430764443953:web:3b6a94bda41193ae288810"
  };


  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
