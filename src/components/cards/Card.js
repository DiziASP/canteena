import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useStateValue } from "@/context/StateProvider";
import { actionType } from "@/context/reducer";
import { deleteDoc, doc } from "firebase/firestore";
import { Router, useRouter } from "next/router";
import { firestore } from "@/firebase/clientApp";

const Card = ({ data }) => {
  const [{ items, cartItems, user }, dispatch] = useStateValue();
  const router = useRouter();
  const handleAddToCart = (e) => {
    e.preventDefault();

    if (cartItems.includes(data)) {
      alert("Item already in the cart");
      return;
    }

    if (data?.seller.id === user?.id) {
      alert("You can't buy this product because you're the seller!");
      return;
    }

    const res = items.find((item) => item.id === data.id);

    let newArr = cartItems.slice();
    newArr.push(res);
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: newArr,
    });
    alert("Added to cart!");
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    const res = data;
  }, [cartItems]);

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: 0.75,
      }}
      className="flex flex-col rounded-[2rem] 
                 w-[20rem] cursor-pointer bg-pastel-white shadow-md"
    >
      {/* Item Image */}
      <div className="w-full">
        <Image
          src={
            data.imgUrl || data.imgUrl !== ""
              ? data.imgUrl
              : "/assets/images/no-image.png"
          }
          alt="Products"
          width={480}
          height={300}
          objectFit="cover"
          className="w-full h-1/4 rounded-t-[2rem]"
        />
      </div>

      {/* Item Content */}
      <div id="cardcontent" className="flex flex-col px-4 py-4">
        <div className="flex flex-row font-bold text-pastel-dblue mb-4 justify-between">
          <p className="flex flex-row">
            <span className="text-sm mr-2">IDR</span>{" "}
            <span className="text-xl ">{data.price}</span>
          </p>
          {!user ? (
            ""
          ) : (
            <motion.button
              whileHover={{ scale: 1.1, transition: 2 }}
              whileTap={{ scale: 1.2 }}
              onClick={(e) => handleAddToCart(e)}
              type="button"
              className="text-pastel-black rounded-lg text-sm p-2 bg-pastel-blue"
            >
              Add to cart
            </motion.button>
          )}
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-pastel-black text-sm">
            {data.created_at || "Invalid Date"}
          </p>
          <p className="text-pastel-black text-sm">
            {data?.seller.username || ""}
          </p>
        </div>
        <h1 className="text-black font-semibold text-lg mb-2">{data.name}</h1>
        <p className="text-pastel-black  text-sm w-3/4 mb-4 break-words">
          {data.description}
        </p>
        {data?.seller.id === user?.id && (
          <motion.button
            whileHover={{ scale: 1.1, transition: 2 }}
            whileTap={{ scale: 1.2 }}
            onClick={(e) => {
              e.preventDefault();
              deleteDoc(doc(firestore, "items", `${data.id}`)).then(() => {
                alert("Item Deleted Successfully");
                router.reload();
              });
            }}
            type="button"
            className="text-pastel-white rounded-lg text-sm p-2 bg-red-400"
          >
            Remove Item
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
