import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  deleteDoc,
  WriteBatch,
} from "firebase/firestore";
import { firestore } from "@/firebase/clientApp";

// Saving new Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "items", `${data.id}`), data);
};

// Saving new user
export const saveUser = async (data) => {
  await setDoc(doc(firestore, "users", `${data.id}`), data, {
    merge: true,
  });
};

// Update user
export const updateUser = async (data) => {
  await setDoc(doc(firestore, "users", `${data.id}`), data, {
    merge: true,
  });
};

// get all items
export const getAllItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "items"), orderBy("name", "asc"))
  );

  return items.docs.map((doc) => doc.data());
};

// get all users
export const getAllUsers = async () => {
  const items = await getDocs(
    query(collection(firestore, "users"), orderBy("id", "asc"))
  );

  return items.docs.map((doc) => doc.data());
};

//  get specific users
export const getUser = async (data) => {
  const docSnap = await getDoc(doc(firestore, "users", `${data.id}`));

  return docSnap.data();
};

// Delete Item
export const deleteCartItem = async (data) => {
  for (let i = 0; i < data.length; i++) {
    await setDoc(
      doc(firestore, "users", `${data[i].seller.id}`),
      {
        ...data[i].seller,
        balance: Number(data[i].seller.balance) + Number(data[i].price),
      },
      {
        merge: true,
      }
    );

    await deleteDoc(doc(firestore, "items", `${data[i].id}`));
  }
};
