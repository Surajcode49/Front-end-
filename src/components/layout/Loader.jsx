import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Loader = () => {
  const options = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    transition: {
      ease: "linear",
      repeat: "Infinity",
      repeatType: "reverse",
    },
  };
  return (
    <div className="loader">
      <IoFastFoodOutline />

      <div>
        <motion.p {...options}>⋘ 𝑃𝑙𝑒𝑎𝑠𝑒 𝑤𝑎𝑖𝑡...🤚⋙</motion.p>
      </div>
    </div>
  );
};

export default Loader;
