import React from "react";
import { motion } from "framer-motion";

const FlipLinks = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-2xl font-cabinet font-light max-lg:text-xl"
    >
      <motion.div
        variants={{
          initial: {
            y: 0,
          },
          hovered: {
            y: "-100%",
          },
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0"
        variants={{
          initial: {
            y: "100%",
          },
          hovered: {
            y: 0,
          },
        }}
      >
        {children}
      </motion.div>
    </motion.a>
  );
};

export default FlipLinks;
