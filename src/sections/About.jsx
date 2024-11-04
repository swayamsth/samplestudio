import React from "react";
import { aboutUs } from "../constants";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/anim";

const About = () => {
  return (
    <section className="mt-8">
      {aboutUs.map(({ title, description, button, image }, index) => (
        <div
          key={index}
          className="p-6 sm:p-7 lg:p-8 flex justify-between items-center gap-32 max-lg:gap-16 max-sm:block"
        >
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: false }}
            className="mt-16 sm:mt-24"
          >
            <h1 className="font-cabinet text-3xl font-medium mb-3 sm:text-4xl sm:mb-5 lg:text-5xl 2xl:text-6xl">
              {title}
            </h1>
            <p className="font-satoshi font-light text-base sm:text-lg lg:text-xl 2xl:text-2xl">
              {description}
            </p>
            <div className="mt-12">
              <Button button={button} />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: false }}
            className="overflow-hidden"
          >
            <img
              src={image}
              alt=""
              className="w-full h-full max-sm:mt-8 rounded-xl"
            />
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default About;
