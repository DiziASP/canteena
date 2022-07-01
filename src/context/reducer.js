export const actionType = {
  SET_USER: "SET_USER",
  SET_ITEMS: "SET_ITEMS",
  REMOVE_ITEM: "REMOVE_ITEM",
  SET_CART_SHOW: "SET_CART_SHOW",
  SET_CARTITEMS: "SET_CARTITEMS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionType.SET_ITEMS:
      return {
        ...state,
        items: action.items,
      };

    case actionType.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.cartShow,
      };

    case actionType.SET_CARTITEMS:
      return {
        ...state,
        cartItems: action.cartItems,
      };

    case actionType.REMOVE_ITEM:
      return {
        ...state,
        cartItems: action.items,
      };

    default:
      return state;
  }
};

export default reducer;
