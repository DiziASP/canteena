import React from "react";
import Image from "next/image";
import HistoryItem from "./HistoryItem";

const HistoryCard = () => {
  const api = "https://picsum.photos/200";
  return (
    <div className="w-full border rounded-lg shadow-md min-h-[20rem] bg-white ">
      <div className="flex flex-col lg:flex-row border-b px-8 py-6 gap-10 justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="font-medium">Date Purchased</h2>
          <p className="text-sm text-gray-500 ">July 26th 1994</p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-medium">Total Amount</h2>
          <p className="text-base font-semibold text-black ">IDR 99999</p>
        </div>
      </div>

      {/* Cards */}
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
    </div>
  );
};

export default HistoryCard;
