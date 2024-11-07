import React, { useState } from "react";
import { footer } from "../constants";
import { div, section } from "framer-motion/client";
import FlipLinks from "../components/FlipLinks";
import { motion } from "framer-motion";

const Footer = () => {
  const [isHovered, setHovered] = useState(false);

  const companyInfo = footer[0];
  const quickLinks = footer[1];
  const socials = footer[2];
  return (
    <footer className="relative p-8">
      <div className="flex justify-between max-sm:flex-col max-sm:gap-10">
        {/* Company Information */}
        <div className="flex flex-col gap-5 max-sm:gap-3">
          <h2 className="font-cabinet font-light text-4xl md:text-5xl xl:text-6xl">
            {companyInfo.companyName}
          </h2>
          <p className="font-satoshi font-light text-2xl max-lg:text-xl max-2xl:text-2xl 2xl:text-3xl">
            {companyInfo.location}
          </p>
          <p className="font-satoshi font-light text-2xl max-lg:text-xl max-2xl:text-2xl 2xl:text-3xl">
            {companyInfo.tel}
          </p>
          <a
            href={`mailto:${companyInfo.email}`}
            className="font-satoshi font-light text-2xl max-lg:text-xl max-2xl:text-2xl 2xl:text-3xl relative overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {companyInfo.email}
            <motion.div
              intial={{ x: "105%" }}
              animate={{
                x: isHovered ? 0 : "105%",
              }}
              transition={{ duration: 0.75, ease: [0.65, 0, 0.35, 1] }}
              className="absolute w-full h-[2px] rounded-full bg-black bottom-0 left-0"
            />
          </a>
        </div>

        {/* Quick Links */}
        <div className="inline-flex flex-col gap-6 items-start max-sm:gap-3">
          <h2 className="font-cabinet font-light text-3xl md:text-4xl xl:text-5xl">
            {quickLinks.title}
          </h2>
          <div className="space-y-6 max-sm:space-y-3">
            {quickLinks.links.map((link, index) => (
              <div key={index} className="flex">
                <FlipLinks href={link.href}>{link.title}</FlipLinks>
              </div>
            ))}
          </div>
        </div>

        {/* Socials */}
        <div className="inline-flex flex-col gap-6 items-start max-sm:gap-3">
          <h2 className="font-cabinet font-light text-3xl md:text-4xl xl:text-5xl">
            {socials.title}
          </h2>
          <div className="space-y-6 max-sm:space-y-3">
            {socials.links.map((link, index) => (
              <div key={index} className="flex">
                <FlipLinks href={link.href}>{link.title}</FlipLinks>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-32 flex justify-between items-center gap-6 max-sm:gap-3 max-sm:mt-6">
        <div className="h-[2px] w-full bg-black rounded-full" />
        <p className="font-satoshi font-light text-base md:text-lg xl:text-xl 2xl:text-2xl min-w-fit">
          © 2024 samplestudio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
