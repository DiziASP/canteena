import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Card = ({ data }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: 0.75,
      }}
      className="flex flex-col rounded-[2rem] 
                 w-[20rem] cursor-pointer bg-white"
    >
      {/* Item Image */}
      <div className="w-full">
        <Image
          src={data.imgUrl || "/assets/images/no-image.webp"}
          alt="Products"
          width={480}
          height={300}
          objectFit="cover"
          className="w-full h-1/4 rounded-t-[2rem]"
        />
      </div>

      {/* Item Content */}
      <div id="cardcontent" className="flex flex-col px-4 py-4">
        <div className="flex flex-row font-bold text-blue-400 mb-4 justify-between">
          <p className="flex flex-row">
            <span className="text-sm mr-2">IDR</span>{" "}
            <span className="text-xl ">{data.price}</span>
          </p>
          <motion.button
            whileHover={{ scale: 1.1, transition: 2 }}
            type="button"
            className="text-white rounded-lg text-sm p-2 bg-indigo-400"
          >
            Add to cart
          </motion.button>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-gray-500 text-sm">John Doe</p>
          <p className="text-gray-500 text-sm">
            {data.created_at || "Invalid Date"}
          </p>
        </div>
        <h1 className="font-semibold text-lg mb-2">Lorem Ipsum</h1>
        <p className="text-gray-500 text-sm w-3/4 mb-4 break-words">
          {data.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
