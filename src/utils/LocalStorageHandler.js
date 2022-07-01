export const fetchUser = () => {
  if (typeof window !== "undefined") {
    const userInfo =
      localStorage.getItem("user") !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();

    return userInfo ? userInfo : null;
  }
};

export const fetchCart = () => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const cartInfo =
      localStorage.getItem("cartItems") !== "undefined"
        ? JSON.parse(localStorage.getItem("cartItems"))
        : localStorage.clear();

    return cartInfo ? cartInfo : [];
  }
};
