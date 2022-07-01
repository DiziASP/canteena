import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useStateValue } from "@/context/StateProvider";
import { actionType } from "@/context/reducer";
import { fetchCart } from "@/utils/LocalStorageHandler";
import Image from "next/image";

let items = [];

const CartItem = ({ item, setFlag, flag }) => {
  const [{ cartItems }, dispatch] = useStateValue();

  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
  };

  const removeItem = () => {
    const res = cartItems;
    res = res.filter((data) => data.id !== item.id);
    dispatch({ type: actionType.REMOVE_ITEM, cartItems: res });
  };

  useEffect(() => {
    items = cartItems;
  }, [items]);

  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
      <Image
        src={item?.imgUrl}
        className="max-w-[60px] rounded-full object-contain"
        alt=""
        height={80}
        width={80}
      />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base ">{item?.name}</p>
        <p className="text-sm block  font-semibold">
          $ {parseFloat(item?.price)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
