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

  const removeItem = () => {
    const res = cartItems;
    res = res.filter((data) => data.id !== item.id);
    console.log(res);
    dispatch({ type: actionType.SET_CARTITEMS, cartItems: res });
  };

  useEffect(() => {
    items = cartItems;
  }, [items]);

  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex flex-row justify-between items-center gap-2">
      <div className="flex flex-row items-center gap-4">
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
            IDR {parseFloat(item?.price)}
          </p>
        </div>
      </div>

      {/* Remove Button */}
      <motion.button
        whileTap={{ scale: 0.8 }}
        type="button"
        onClick={removeItem}
        className=" p-2 rounded-xl bg-gradient-to-tr from-red-400 to-red-600 text-gray-50 text-sm my-2 hover:shadow-lg"
      >
        Remove
      </motion.button>
    </div>
  );
};

export default CartItem;
