import Navbar from "@/components/navigations/Navbar";

import React from "react";
import { Footer } from "@/components/Footer";
import Meta from "./Meta";

export const MainLayout = ({ meta, children }) => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <Meta title={meta.title} description={meta.description} />

      <Navbar />

      {children}

      <Footer />
    </div>
  );
};
