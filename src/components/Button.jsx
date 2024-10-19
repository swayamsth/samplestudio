import React, { useState } from "react";
import { motion } from "framer-motion";
import FlipLinks from "./FlipLinks";

const Button = ({ button, href }) => {
  return (
    <button className="border-[1px] rounded-full border-black overflow-hidden relative">
      <FlipLinks>
        <div className="px-5 py-2 flex items-center justify-center gap-2">
          <div className="font-satoshi text-lg font-light sm:text-xl lg:text-xl  2xl:text-2xl">
            {button.title}
          </div>
          <img src={button.icon} alt="" />
        </div>
      </FlipLinks>
    </button>
  );
};

export default Button;
