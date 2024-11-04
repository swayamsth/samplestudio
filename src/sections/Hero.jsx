import React from "react";
import NavBar from "../components/NavBar";
import { hero } from "../constants";
import Button from "../components/Button";
import FlipLinks from "../components/FlipLinks";
import Magnetic from "../components/Magnetic";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/anim";

const Hero = () => {
  return (
    <section className="bg-[url('/images/heroImage.webp')] h-screen w-full bg-cover bg-bottom relative">
      <NavBar />

      {hero.map(({ title, description, button }, index) => (
        <motion.div
          variants={fadeIn("up", 2.2)}
          initial="hidden"
          animate={"visible"}
          viewport={{ once: true, amount: 0.7 }}
          key={index}
          className="grid place-content-center text-center gap-y-3 p-8 w-full h-5/6 top-0 absolute sm:gap-y-4 2xl:gap-y-6"
        >
          <h1 className="font-satoshi text-4xl leading-tight font-normal sm:text-5xl lg:text-6xl  2xl:text-7xl">
            {title}
          </h1>
          <p className="font-satoshi text-lg font-light sm:text-xl lg:text-2xl 2xl:text-3xl">
            {description}
          </p>
          <div className="mx-auto">
            <Button button={button} />
          </div>
        </motion.div>
      ))}

      <motion.div
        variants={fadeIn("left", 2.2)}
        initial="hidden"
        animate={"visible"}
        viewport={{ once: true, amount: 0.7 }}
        className="absolute bottom-0 right-0"
      >
        <Magnetic>
          <button className="rounded-full bg-white border-none flex items-center justify-center m-6 sm:m-7 lg:m-8">
            <FlipLinks>
              <img
                src="./icons/arrow-down.svg"
                alt=""
                className="p-3 size-[125%]"
              />
            </FlipLinks>
          </button>
        </Magnetic>
      </motion.div>
    </section>
  );
};

export default Hero;
