import Image from "next/image";
import React from "react";
import HistoryCardItem from "./HistoryCardItem";
import { useStateValue } from "@/context/StateProvider";
import { useEffect, useState } from "react";

const HistoryCard = () => {
  const [{ user }, dispatch] = useStateValue();
  const [history, setHistory] = useState([]);
  useEffect(() => {
    setHistory(user.orders);
  }, []);
  return (
    <div className="flex flex-col  bg-white rounded-lg ">
      {/* Content */}
      <div className="flex flex-col w-full justify-start gap-8 py-4 px-6 border-b ">
        {/* History Items */}
        {history.map((item) => (
          <HistoryCardItem data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default HistoryCard;
