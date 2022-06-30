import React from "react";
import Image from "next/image";

const HistoryItem = () => {
  const api = "https://picsum.photos/200";
  return (
    <div className="flex lg:flex-row flex-col w-full justify-start gap-4 px-8 py-8 border-b bg-white">
      <div className="flex">
        <Image
          src={api}
          alt="Products"
          width={150}
          height={150}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col lg:flex-row  justify-between">
          <h2 className="font-medium">Micro Backpack</h2>
          <p className="font-medium">IDR 90000</p>
        </div>
        <div className="flex">
          <p className="text-sm">
            Must go faster. I gave it a cold? I gave it a virus. A computer
            virus. God creates dinosaurs. God destroys dinosaurs. God creates
            Man. Man destroys God. Man creates Dinosaurs. You really think you
            can fly that thing? You really think you can fly that thing?
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
