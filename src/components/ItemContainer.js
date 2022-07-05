import { useStateValue } from "@/context/StateProvider";
import { actionType } from "@/context/reducer";
import { getAllItems } from "@/utils/FirebaseAPI";
import React, { useEffect, useState } from "react";

import Card from "./cards/Card";

const ItemContainer = () => {
  const [{ items }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllItems().then((data) => {
      dispatch({
        type: actionType.SET_ITEMS,
        items: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      id="shop"
      className="flex flex-col gap-12 justify-center md:justify-start px-14 pb-14 items-start max-w-screen-xl "
    >
      <div className="w-full flex items-center justify-center lg:justify-between">
        <p
          className="text-2xl font-semibold capitalize relative 
        before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 
        before:left-0 before:bg-gradient-to-tr from-pastel-blue to-blue-400 transition-all ease-in-out duration-100"
        >
          Our Items
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col items-center lg:grid grid-cols-3 gap-8  w-full">
        {/* Card */}
        {items.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemContainer;
