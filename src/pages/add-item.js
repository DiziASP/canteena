import { MainLayout } from "@/layouts/MainLayout";

import { motion } from "framer-motion";
import { useState } from "react";
import { MdFastfood, MdAttachMoney, MdDescription } from "react-icons/md";

export default function AddItem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageAsset, setImageAsset] = useState(null);
  const [alertStatus, setAlertStatus] = useState("danger");

  return (
    <MainLayout
      meta={{
        title: "Add Item | Canteena",
        description: "Honest store for honest people!",
      }}
    >
      <div className="w-[90%] md:w-[50%] border border-gray-300 shadow-md rounded-lg p-4 flex flex-col items-center justify-center gap-8">
        <h1 className="font-semibold text-3xl">Sell your item!</h1>

        {/* Product Name */}
        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
          <MdFastfood className="text-xl text-gray-700" />
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Write product name"
            className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
          />
        </div>

        {/* Product Details */}
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdDescription className="text-gray-700 text-2xl" />
            <input
              type="text"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>

          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdAttachMoney className="text-gray-700 text-2xl" />
            <input
              type="text"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
        </div>

        <div className="flex items-center w-full">
          <button
            type="button"
            className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-blue-400 px-12 py-2 rounded-lg text-lg text-white font-semibold"
          >
            Save
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
