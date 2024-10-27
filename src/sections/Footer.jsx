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
            className="font-satoshi font-light text-2xl max-lg:text-xl max-2xl:text-2xl 2xl:text-3xl"
          >
            {companyInfo.email}
          </a>
        </div>

        {/* Quick Links */}
        <div className="inline-flex flex-col gap-6 items-start max-sm:gap-3">
          <h2 className="font-cabinet font-light text-3xl md:text-4xl xl:text-5xl">
            {quickLinks.title}
          </h2>
          <div className="space-y-6 max-sm:space-y-3">
            {quickLinks.links.map((link, index) => (
              <div className="flex">
                <FlipLinks href={link.href} key={index}>
                  {link.title}
                </FlipLinks>
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
              <div className="flex">
                <FlipLinks href={link.href} key={index}>
                  {link.title}
                </FlipLinks>
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
