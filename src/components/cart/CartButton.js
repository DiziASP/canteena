import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const CartButton = () => {
  return (
    <Link href="/cart">
      <button
        className={` rounded-full scale-90 hover:scale-100 hover:opacity-70 ease-in-out duration-300 `}
      >
        <Image
          src="/assets/images/cart.svg"
          alt="Avatar Profile"
          height={30}
          width={30}
          objectFit="cover"
        />
      </button>
    </Link>
  );
};
