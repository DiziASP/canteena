import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { useStateValue } from "@/context/StateProvider";
import { actionType } from "@/context/reducer";
import { motion } from "framer-motion";
import CartItem from "./CartItem";
import {
  deleteCartItem,
  getAllItems,
  saveItem,
  updateUser,
} from "@/utils/FirebaseAPI";
import { useRouter } from "next/router";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { firestore } from "@/firebase/clientApp";

const CartContainer = () => {
  const [{ items, user, cartShow, cartItems }, dispatch] = useStateValue();
  const [flag, setFlag] = useState(1);
  const [total, setTot] = useState(0);
  const router = useRouter();

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [],
    });

    localStorage.setItem("cartItems", JSON.stringify([]));
  };

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (acc, item) {
      return acc + Number(item.price);
    }, 0);
    setTot(totalPrice);
  }, [cartItems]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (Number(user.balance) - Number(total) < 0) {
        alert("Insufficient Balance");
        return;
      }

      let res = user.orders.slice();
      res.push(...cartItems);

      const data = {
        ...user,
        balance: Number(user.balance) - Number(total),
        orders: res,
      };

      updateUser(data).then(() => {
        deleteCartItem(cartItems).then(() => {
          dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: [],
          });
          localStorage.setItem("cartItems", JSON.stringify([]));
          localStorage.setItem("user", JSON.stringify(data));
          alert("Purchase Successful");
          router.reload();
        });
      });
    } catch (e) {
      alert("Error uploading the data: " + e.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-full md:w-[30rem] h-screen bg-white drop-shadow-md flex flex-col z-[101] rounded-l-lg"
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => {
            dispatch({
              type: actionType.SET_CART_SHOW,
              cartShow: !cartShow,
            });
          }}
        >
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          onClick={clearCart}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-base"
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>

      {/* bottom section */}
      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
          {/* cart Items section */}
          <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {/* cart Item */}
            {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  setFlag={setFlag}
                  flag={flag}
                />
              ))}
          </div>

          {/* Cart total */}
          <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-700 text-xl font-semibold">Total</p>
              <p className="text-gray-700 text-xl font-semibold">IDR {total}</p>
            </div>

            {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                onClick={(e) => handleSubmit(e)}
                className="w-full p-2 rounded-xl bg-gradient-to-tr from-blue-400 to-blue-600 text-gray-50 text-lg my-2 hover:shadow-lg"
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-xl bg-gradient-to-tr from-blue-400 to-blue-600 text-gray-50 text-lg my-2 hover:shadow-lg"
              >
                Login to check out
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <p className="text-xl text-textColor font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;
