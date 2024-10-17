import React from "react";
import FlipLinks from "./FlipLinks";

const NavBar = () => {
  return (
    <nav className="flex justify-between p-8 items-center">
      <div className="font-cabinet font-light text-3xl max-sm:text-xl max-lg:text-2xl max-2xl:text-3xl">
        samplestudio.
      </div>
      <div className="hidden max-sm:block">
        <img src="./icons/menu.svg" alt="" />
      </div>
      <div className="flex gap-8 max-sm:hidden">
        <FlipLinks href="#">about us</FlipLinks>
        <FlipLinks href="#">projects</FlipLinks>
        <FlipLinks href="#">service</FlipLinks>
        <FlipLinks href="#">contact</FlipLinks>
      </div>
    </nav>
  );
};

export default NavBar;
