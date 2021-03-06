import { fetchCart, fetchUser } from "@/utils/LocalStorageHandler";

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
  user: userInfo,
  items: [],
  cartShow: false,
  cartItems: cartInfo,
};
