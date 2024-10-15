import React from "react";

const FlipLinks = ({ children, href }) => {
  return (
    <a href={href} className="text-2xl font-cabinet font-light">
      {children}
    </a>
  );
};

export default FlipLinks;
