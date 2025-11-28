import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { app } from "../firebase/config.js";

export const getProductsByCategory = async (categoria) => {
  const db = getFirestore(app);
  const productosRef = collection(db, "productos");

  const q = query(productosRef, where("categori", "array-contains", categoria));

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
};
