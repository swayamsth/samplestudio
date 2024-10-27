import React, { useState } from "react";
import { motion } from "framer-motion";
import FlipLinks from "./FlipLinks";
import clsx from "clsx";

const Button = ({ button, href, contact }) => {
  return (
    <button
      className={clsx(
        "border-[1px] rounded-full border-black overflow-hidden relative",
        contact && "border-contact"
      )}
    >
      <FlipLinks>
        <div className="px-5 py-2 flex items-center justify-center gap-2">
          <div
            className={clsx(
              "font-satoshi text-lg font-light sm:text-xl lg:text-xl  2xl:text-2xl",
              contact && "text-contact"
            )}
          >
            {button.title}
          </div>
          <img src={button.icon} alt="" />
        </div>
      </FlipLinks>
    </button>
  );
};

export default Button;
