import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useStateValue } from "@/context/StateProvider";

const Landing = () => {
  const [{ items, user }, dispatch] = useStateValue();

  const [logged, setLogged] = useState();
  useEffect(() => {
    if (user) {
      setLogged(true);
    }
  });

  return (
    <div className="w-full flex flex-col lg:flex-row p-14 items-center justify-between max-w-screen-xl">
      {/* Landings */}
      <div className="w-7/12 flex flex-col gap-8 z-10">
        <h2 className="md:text-[4rem] text-[2rem] font-bold leading-tight text-center lg:text-left">
          Honest store for{" "}
          <span className="text-pastel-dgreen  ">honest people</span>
        </h2>
        <p className="font-medium text-pastel-black text-sm md:text-xl leading-tight text-center lg:text-left">
          Selling things has never been easier!
        </p>

        <div className="flex flex-col lg:flex-row justify-start gap-8">
          <motion.a
            href="#shop"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
            className="flex lg:w-4/12 justify-center
        px-6 py-4 bg-pastel-dblue cursor-pointer
        text-white font-medium text-md 
        leading-tight rounded-md 
        shadow-md "
          >
            Buy Now
          </motion.a>
          <Link href="/add-item">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              className={`flex ${
                !logged ? "hidden" : ""
              } lg:w-4/12 justify-center
              px-6 py-4 bg-pastel-purple cursor-pointer
              text-white font-medium text-md 
              leading-tight rounded-md 
              shadow-md `}
            >
              Sell Item
            </motion.a>
          </Link>
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
