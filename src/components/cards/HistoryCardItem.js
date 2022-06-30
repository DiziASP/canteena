import Image from "next/image";
import React from "react";

const HistoryCardItem = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full">
      <div className="flex">
        <Image
          src="/assets/images/template.jpg"
          alt="Products"
          width={150}
          height={150}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row  justify-between">
          <h2 className="font-medium">Micro Backpack</h2>
          <p className="font-medium">IDR 90000</p>
        </div>
        <div className="flex">
          <p className="text-sm ">
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

export default HistoryCardItem;
