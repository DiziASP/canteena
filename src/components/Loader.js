import React from "react";
import Image from "next/image";
const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <Image src="/assets/images/loader.gif" height={400} width={400} alt="" />
    </div>
  );
};

export default Loader;
