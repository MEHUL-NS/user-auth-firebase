import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAc6-bMNm2SM9GzJqPX7PyWUujAoSwujeA",
  authDomain: "authtrial-41854.firebaseapp.com",
  projectId: "authtrial-41854",
  storageBucket: "authtrial-41854.appspot.com",
  messagingSenderId: "53661592706",
  appId: "1:53661592706:web:609631e51a2bc4b19b189b",
  measurementId: "G-CKP5JD8MXN",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export const auth = getAuth(app)


export const signInWithGoogle = () => {    
    signInWithPopup(auth , provider)         
    .catch((error) => {
    console.log(error)
    })
}
