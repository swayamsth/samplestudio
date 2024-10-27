import React from "react";
import { footer } from "../constants";
import { div, section } from "framer-motion/client";
import FlipLinks from "../components/FlipLinks";

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
      <div className="inline-flex flex-col gap-2 items-start">
        <h2>{quickLinks.title}</h2>
        <div className="space-y-2">
          {quickLinks.links.map((link, index) => (
            <div className="flex">
              <FlipLinks href={link.href} key={index}>
                {link.title}
              </FlipLinks>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
