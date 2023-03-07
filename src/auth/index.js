import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAhHmNxAuslDyM8rvSHTGqOQi0NxGRJWCw",
  authDomain: "web-assignment3-adc37.firebaseapp.com",
  projectId: "web-assignment3-adc37",
  storageBucket: "web-assignment3-adc37.appspot.com",
  messagingSenderId: "465398514319",
  appId: "1:465398514319:web:9c9dbb9245aa973a1a26fa",
}


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password)

const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password)

export { signIn, signUp };
