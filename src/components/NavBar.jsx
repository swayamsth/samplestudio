import React from "react";
import FlipLinks from "./FlipLinks";

const NavBar = () => {
  return (
    <nav className="flex justify-between p-8">
      <div className="font-cabinet font-light text-3xl">samplestudio.</div>
      <div className="flex gap-8">
        <FlipLinks href="#">about us</FlipLinks>
        <FlipLinks href="#">projects</FlipLinks>
        <FlipLinks href="#">service</FlipLinks>
        <FlipLinks href="#">contact</FlipLinks>
      </div>
    </nav>
  );
};

export default NavBar;
