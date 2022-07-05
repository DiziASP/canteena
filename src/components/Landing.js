import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useStateValue } from "@/context/StateProvider";

const Landing = () => {
  const [{ items, user }, dispatch] = useStateValue();

  return (
    <div className="w-full flex flex-col lg:flex-row p-14 items-center justify-between max-w-screen-xl">
      {/* Landings */}
      <div className="w-7/12 flex flex-col gap-8 z-10">
        <h2 className="md:text-[4rem] text-[2rem] font-bold leading-tight text-center lg:text-left">
          Honest store for{" "}
          <span className="text-blue-400  ">honest people</span>
        </h2>
        <p className="font-medium text-gray-600 text-sm md:text-xl leading-tight text-center lg:text-left">
          Selling things has never been easier!
        </p>

        <div className="flex flex-col lg:flex-row justify-start gap-8">
          <motion.a
            href="#shop"
            whileHover={{ opacity: 0.5 }}
            whileTap={{ scale: 1.1 }}
            className="flex lg:w-4/12 justify-center
        px-6 py-4 bg-blue-400 cursor-pointer
        text-white font-medium text-md 
        leading-tight rounded-md 
        shadow-md "
          >
            Buy Now
          </motion.a>
          {!user ? (
            ""
          ) : (
            <Link href="/add-item">
              <motion.a
                whileTap={{ scale: 1.1 }}
                whileHover={{ opacity: 0.5 }}
                className="flex lg:w-4/12 justify-center
        px-6 py-4 bg-indigo-400 cursor-pointer
        text-white font-medium text-md 
        leading-tight rounded-md 
        shadow-md "
              >
                Sell Item
              </motion.a>
            </Link>
          )}
        </div>
      </div>
      {/* Logo GIF */}
      <div className="hidden lg:flex w-5/12 md:w-4/12">
        <Image
          src="/assets/images/cards.gif"
          width={400}
          height={400}
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default Landing;
