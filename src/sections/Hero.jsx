import React from "react";
import NavBar from "../components/NavBar";
import { hero } from "../constants";

const Hero = () => {
  return (
    <section className="bg-[url('/images/heroImage.webp')] h-screen w-full bg-cover bg-bottom">
      <NavBar />
      {hero.map(({ title, description, button }) => (
        <div className="grid place-content-center h-[60vh] text-center gap-y-4">
          <h1 className="font-satoshi text-[3.5rem] leading-tight font-normal">
            {title}
          </h1>
          <p className="font-satoshi text-xl font-light">{description}</p>
          <div className="mx-auto">
            <button className="font-satoshi text-xl font-light border-[1px] rounded-full border-black px-5 py-2 flex items-center">
              {button.title}
              <img src={button.icon} alt="" />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
