import Image from "next/image";
import React from "react";

const HistoryCardItem = ({ data }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full">
      <div className="flex">
        <Image
          src={data.imgUrl ? data.imgUrl : "/assets/images/template.jpg"}
          alt="Products"
          width={100}
          height={100}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="flex flex-col lg:flex-row  justify-between">
          <h2 className="font-medium">{data.name}</h2>
        </div>
        <div className="flex">
          <p className="text-sm ">{data.description}</p>
        </div>
        <div className="flex">
          <p className="font-medium">IDR {`${data.price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default HistoryCardItem;
