import React from "react";
import NavBar from "../components/NavBar";
import { hero } from "../constants";

const Hero = () => {
  return (
    <section className="bg-[url('/images/heroImage.webp')] h-screen w-full bg-cover bg-bottom relative">
      <NavBar />

      {hero.map(({ title, description, button }) => (
        <div className="grid place-content-center text-center gap-y-4 lg:h-[60vh] max-lg:h-[57vh] max-md:h-[55vh] p-8">
          <h1 className="font-satoshi text-[3.5rem] leading-tight font-normal max-lg:text-4xl">
            {title}
          </h1>
          <p className="font-satoshi text-xl font-light max-lg:text-lg">
            {description}
          </p>
          <div className="mx-auto">
            <button className="border-[1px] rounded-full border-black px-5 py-2 flex items-center ">
              <span className="font-satoshi text-xl font-light max-lg:text-sm">
                {button.title}
              </span>
              <img src={button.icon} alt="" />
            </button>
          </div>
        </div>
      ))}

      <div className="absolute bottom-0 right-0">
        <button className="rounded-full bg-white border-none flex items-center justify-center m-8">
          <img
            src="./icons/arrow-down.svg"
            alt=""
            className="p-3 size-[125%]"
          />
        </button>
      </div>
    </section>
  );
};

export default Hero;
