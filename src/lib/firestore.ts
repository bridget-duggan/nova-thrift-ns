import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function getStores() {
  const snapshot = await getDocs(collection(db, "stores"));
  const stores = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  return stores;
}
