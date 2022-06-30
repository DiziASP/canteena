import React from "react";
import { motion } from "framer-motion";
import {
  BsCalendarDateFill as Calendar,
  BsSortAlphaDown as Alphabet,
} from "react-icons/bs";

const FilterCard = ({ filter }) => {
  return (
    <motion.div
      whileTap={{ scale: 1.3, transition: 0.75 }}
      whileHover={{
        scale: 1.2,
        transition: 0.75,
        color: "#FFFFFF",
        backgroundColor: "rgba(248 113 113)",
      }}
      className="cursor-pointer h-28 w-24 flex flex-col gap-4 justify-center items-center rounded-xl bg-slate-300"
    >
      {filter === "Date" ? <Calendar size={24} /> : <Alphabet size={24} />}
      <p className="font-semibold">{filter}</p>
    </motion.div>
  );
};

export default FilterCard;
