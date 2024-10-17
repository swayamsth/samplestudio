import React from "react";
import { motion } from "framer-motion";

const FlipLinks = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative z-10 block overflow-hidden whitespace-nowrap text-2xl font-cabinet font-light max-lg:text-xl max-2xl:text-2xl 2xl:text-3xl"
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
        transition={{ duration: 0.2, ease: "easeInOut" }}
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
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.a>
  );
};

export default FlipLinks;
