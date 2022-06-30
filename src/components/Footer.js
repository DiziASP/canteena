import React from "react";
import { AppConfig } from "@/utils/appConfig";
export const Footer = () => {
  return (
    <div
      className="absolute bottom-0 inset-x-0 mt-4 py-4
             text-center
             text-sm "
    >
      © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{" "}
      <span role="img" aria-label="Love">
        ♥
      </span>{" "}
      by <a href="https://nextjs.org/">Next.Js</a>
    </div>
  );
};
