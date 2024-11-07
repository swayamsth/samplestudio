import React, { Children, useState } from "react";
import FlipLinks from "./FlipLinks";
import Magnetic from "./Magnetic";
import { AnimatePresence, motion } from "framer-motion";
import {
  fadeIn,
  menuVars,
  mobileLinksVars,
  containerVars,
} from "../constants/anim";

const navLinks = [
  { title: "about us", href: "#" },
  { title: "projects", href: "#" },
  { title: "service", href: "#" },
  { title: "contact", href: "#" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-between p-8 items-center relative z-10">
      <Magnetic>
        <motion.div
          variants={fadeIn("down", 2.4)}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true }}
          className="font-cabinet font-light text-3xl max-sm:text-xl max-lg:text-2xl max-2xl:text-3xl 2xl:text-4xl cursor-pointer"
        >
          samplestudio.
        </motion.div>
      </Magnetic>

      {/* Mobile Menu */}
      <motion.div
        variants={fadeIn("down", 2.4)}
        initial="hidden"
        animate={"visible"}
        viewport={{ once: true }}
        className="hidden max-sm:block"
        onClick={toggleMenu}
      >
        <img src="./icons/menu.svg" alt="" />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-[#141516] p-8"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between items-center">
                <h1 className="text-white text-xl">samplestudio.</h1>
                <div onClick={toggleMenu}>
                  <img src="./icons/x.svg" alt="" className="cursor-pointer" />
                </div>
              </div>

              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-cabinet items-center gap-4"
              >
                {navLinks.map((link, index) => (
                  <div className="overflow-hidden" key={index}>
                    <MobileNavLink title={link.title} href={link.href} />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu end */}

      <motion.div
        variants={fadeIn("down", 2.4)}
        initial="hidden"
        animate={"visible"}
        viewport={{ once: true }}
        className="flex gap-8 max-sm:hidden"
      >
        {navLinks.map((link, index) => (
          <FlipLinks key={index} href={link.href}>
            {link.title}
          </FlipLinks>
        ))}
      </motion.div>
    </nav>
  );
};

export default NavBar;

const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div variants={mobileLinksVars}>
      <a className="text-white text-5xl">{title}</a>
    </motion.div>
  );
};
