import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/clientApp";

const prodCollection = collection(db, "products");

const getData = async () => {
  const data = await getDocs(prodCollection);
  const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return result;
};

export default getData;
