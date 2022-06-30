import React, { useState } from "react";

export const CartItem = () => {
  return (
    <div className="flex justify-between lg:justify-start items-center  py-5">
      <div className="flex flex-row w-2/5">
        <div className="w-20">
          <img
            className="h-24"
            src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
            alt=""
          />
        </div>
        <div className="flex flex-col ml-4">
          <span className="font-semibold text-sm">Iphone 6S</span>
          <span className="text-red-500 text-xs">Apple</span>
          <a
            href="#"
            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
          >
            Remove
          </a>
        </div>
      </div>

      <span className="text-center w-1/5 font-semibold text-sm">
        IDR 900000
      </span>
    </div>
  );
};
