import React from "react";
import { AppConfig } from "@/utils/appConfig";
import Image from "next/image";
import Profile from "./Profile";
import { CartButton } from "../cart/CartButton";
import Link from "next/link";

function Navbar() {
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
            height={40}
            width={40}
          />
          <h1 className="font-primary text-xl md:text-2xl font-bold">
            {AppConfig.title}
          </h1>
        </div>
      </Link>
      <div className="flex flex-wrap items-center gap-8 text-base">
        <h2 id="cart" className="hidden lg:flex">
          Hello,&nbsp;
          <span className="font-bold">John Doe</span>!
        </h2>
        <div id="cart" className="flex items-center">
          <CartButton />
        </div>
        <div id="user" className="flex">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
