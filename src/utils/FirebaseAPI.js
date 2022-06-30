import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "@/firebase/clientApp";

// Saving new Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "items", `${Date.now()}`), data, {
    merge: true,
  });
};

// getall food items
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "items"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};
