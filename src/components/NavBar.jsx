import React from "react";
import FlipLinks from "./FlipLinks";
import Magnetic from "./Magnetic";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/anim";

const NavBar = () => {
  return (
    <nav className="flex justify-between p-8 items-center relative z-10">
      <Magnetic>
        <motion.div
          variants={fadeIn("down", 2.2)}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.7 }}
          className="font-cabinet font-light text-3xl max-sm:text-xl max-lg:text-2xl max-2xl:text-3xl 2xl:text-4xl cursor-pointer"
        >
          samplestudio.
        </motion.div>
      </Magnetic>
      <div className="hidden max-sm:block">
        <img src="./icons/menu.svg" alt="" />
      </div>
      <motion.div
        variants={fadeIn("down", 2.2)}
        initial="hidden"
        animate={"visible"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex gap-8 max-sm:hidden"
      >
        <FlipLinks href="#">about us</FlipLinks>
        <FlipLinks href="#">projects</FlipLinks>
        <FlipLinks href="#">service</FlipLinks>
        <FlipLinks href="#">contact</FlipLinks>
      </motion.div>
    </nav>
  );
};

export default NavBar;
