import React, { useState } from "react";
import { motion } from "framer-motion";

const Button = ({ button }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border-[1px] rounded-full border-black px-5 py-2 flex items-center gap-2 overflow-hidden relative"
    >
      <div className="font-satoshi text-lg font-light sm:text-xl lg:text-xl  2xl:text-2xl">
        {button.title}
      </div>
      <img src={button.icon} alt="" />
    </motion.button>
  );
};

export default Button;
