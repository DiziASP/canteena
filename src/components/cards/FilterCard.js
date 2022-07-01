import React from "react";
import { motion } from "framer-motion";
import {
  BsCalendarDateFill as Calendar,
  BsSortAlphaDown as Alphabet,
} from "react-icons/bs";
import { useStateValue } from "@/context/StateProvider";
import { actionType } from "@/context/reducer";

const FilterCard = ({ filter }) => {
  const [{ items }, dispatch] = useStateValue();

  const handleClick = () => {
    const res = items;
    if (filter == "Date") {
      res.sort((a, b) => Number(a.id) - Number(b.id));
    } else if (filter == "A-Z") {
      res.sort((a, b) => a.name.localeCompare(b.name));
    }
    dispatch({
      type: actionType.SET_ITEMS,
      items: res,
    });
  };

  return (
    <motion.div
      whileTap={{ scale: 1.3, transition: 0.75 }}
      whileHover={{
        scale: 1.2,
        transition: 0.75,
        color: "#FFFFFF",
        backgroundColor: "rgba(248 113 113)",
      }}
      onClick={handleClick}
      className="cursor-pointer h-28 w-24 flex flex-col gap-4 justify-center items-center rounded-xl bg-slate-300"
    >
      {filter === "Date" ? <Calendar size={24} /> : <Alphabet size={24} />}
      <p className="font-semibold">{filter}</p>
    </motion.div>
  );
};

export default FilterCard;
