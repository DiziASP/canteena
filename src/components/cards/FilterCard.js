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
      res.sort((a, b) => Number(b.id) - Number(a.id));
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
        backgroundColor: "#6184D8",
      }}
      onClick={handleClick}
      className="cursor-pointer h-28 w-24 flex flex-col gap-4 justify-center items-center rounded-xl bg-pastel-white"
    >
      {filter === "Date" ? <Calendar size={24} /> : <Alphabet size={24} />}
      <p className="font-semibold">{filter}</p>
    </motion.div>
  );
};

export default FilterCard;
