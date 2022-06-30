import { getAllItems } from "@/utils/FirebaseAPI";
import React, { useEffect, useState } from "react";

import Card from "./cards/Card";

const ItemContainer = () => {
  const [item, setItem] = useState([]);
  const fetchData = async () => {
    await getAllItems().then((data) => {
      setItem(data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      id="shop"
      className="flex flex-col gap-8 justify-start px-14 pb-14 items-start max-w-screen-xl "
    >
      <div className="w-full flex items-center justify-between">
        <p
          className="text-2xl font-semibold capitalize text-headingColor relative 
        before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 
        before:left-0 before:bg-gradient-to-tr from-blue-400 to-blue-600 transition-all ease-in-out duration-100"
        >
          Our Items
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:grid grid-cols-3 gap-8  w-full">
        {/* Card */}
        {item.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemContainer;
