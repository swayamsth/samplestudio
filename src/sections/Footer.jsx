import React from "react";
import { footer } from "../constants";
import { section } from "framer-motion/client";

const Footer = () => {
  const companyInfo = footer[0];
  const quickLinks = footer[1];
  const socials = footer[2];
  return (
    <footer className="relative p-8">
      {/* Company Information */}
      <div>
        <h2 className="">{companyInfo.companyName}</h2>
        <p>{companyInfo.location}</p>
        <p>{companyInfo.tel}</p>
        <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
      </div>

      {/* Quick Links */}
    </footer>
  );
};

export default Footer;
