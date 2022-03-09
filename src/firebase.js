/* eslint-disable no-unused-vars */

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_ID,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export async function signUp(email, password, setErrorsAPI, setRegisterIn) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    setRegisterIn(true);
  } catch (error) {
    setErrorsAPI(error.message);
  }
}

export async function signIn(email, password, setErrorsAPI) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    setErrorsAPI(error.message);
  }
}

export async function logOut() {
  signOut(auth);
}
