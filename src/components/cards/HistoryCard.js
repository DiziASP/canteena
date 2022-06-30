import Image from "next/image";
import React from "react";
import HistoryCardItem from "./HistoryCardItem";

const HistoryCard = () => {
  return (
    <div className="flex flex-col  bg-white rounded-lg ">
      {/* Header */}
      <div className="flex flex-row border-b gap-10 p-4 justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="font-medium">Date Purchased</h2>
          <p className="text-sm text-gray-500 ">July 26th 1994</p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-medium">Total Amount</h2>
          <p className="text-base font-semibold text-black ">IDR 99999</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col w-full justify-start gap-8 py-4 px-6 border-b ">
        {/* History Items */}
        <HistoryCardItem />
        <HistoryCardItem />
        <HistoryCardItem />
      </div>
    </div>
  );
};

export default HistoryCard;
