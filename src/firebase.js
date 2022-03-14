/* eslint-disable no-unused-vars */

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  addDoc, collection, deleteDoc, doc, getDocs, getFirestore,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_ID,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collectionRef = collection(db, 'measurements');

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

export async function addMeasurements(data) {
  addDoc(collectionRef, data);
}

export async function getMeasurements(useState) {
  const data = await getDocs(collectionRef);
  useState(data.docs.map((singleDoc) => ({ ...singleDoc.data(), id: singleDoc.id })));
}
export async function deleteMeasurements(id) {
  try {
    const docRef = doc(db, 'measurements', id);
    await deleteDoc(docRef);
  } catch (error) {
    console.log(error);
  }
}
