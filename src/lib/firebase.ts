// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs, addDoc, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Store } from "../types/store";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASURE_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Functions
export async function getStores(): Promise<Store[]> {
  const snapshot = await getDocs(collection(db, "stores"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Store));
}

export async function getStore(id: string): Promise<Store | null> {
  const docRef = doc(db, "stores", id);
  const snapshot = await getDoc(docRef);
  return snapshot.exists() ? (snapshot.data() as Store) : null;
}

export async function addStore(store: Store) {
  return await addDoc(collection(db, "stores"), store);
}

