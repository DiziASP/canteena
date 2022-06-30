import Navbar from "@/components/navigations/Navbar";

import React from "react";
import { Footer } from "@/components/Footer";
import Meta from "./Meta";

export const MainLayout = ({ meta, children }) => {
  return (
    <div className="w-full relative min-h-screen flex flex-col items-center justify-center bg-pastel-white svg-bg-landing">
      <Meta title={meta.title} description={meta.description} />

      <Navbar />

      {children}

      <Footer />
    </div>
  );
};
