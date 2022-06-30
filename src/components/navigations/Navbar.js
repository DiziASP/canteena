import React, { useState } from "react";
import { AppConfig } from "@/utils/appConfig";
import Image from "next/image";
import Profile from "./Profile";
import Link from "next/link";

function Navbar() {
  const [login, setLogin] = useState(false);

  return (
    <div className="absolute inset-x-0 top-0 mx-auto z-20 flex max-w-screen-xl flex-wrap items-center justify-between py-6 px-4 text-black">
      <Link href="/">
        <div
          id="brand"
          className="flex flex-row items-center gap-2 font-bold text-lg cursor-pointer"
        >
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            height={30}
            width={30}
          />
          <h1 className="font-primary text-xl md:text-2xl font-bold">
            {AppConfig.title}
          </h1>
        </div>
      </Link>
      <div className="flex flex-wrap items-center gap-8 text-base">
        <div id="cart" className={`flex ${login ? "" : "hidden"} items-center`}>
          <Link href="/">
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
        </div>
        <div id="user" className="flex">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
