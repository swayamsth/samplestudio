import React, { useState } from "react";
import { whyUsHeading } from "../constants";
import SetApart from "../components/SetApart";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/anim";

const WhyUs = () => {
  const [isHovered, setHovered] = useState(false);
  return (
    <section>
      {whyUsHeading.map(({ title, description, button }, index) => (
        <div
          key={index}
          className="p-8 flex justify-between max-sm:flex-col max-sm:gap-3"
        >
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="font-cabinet text-3xl font-medium sm:text-4xl lg:text-5xl 2xl:text-6xl w-[8ch]"
          >
            {title}
          </motion.h1>

          <div className="flex flex-col gap-5 justify-start items-start md:max-w-[35ch]  lg:max-w-prose">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: true }}
              className="font-satoshi font-light text-base sm:text-lg lg:text-xl 2xl:text-2xl"
            >
              {description}
            </motion.p>

            <motion.button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="font-satoshi text-base font-light sm:text-lg lg:text-xl  2xl:text-2xl relative overflow-hidden"
            >
              {button.title}
              <motion.div
                intial={{ x: 0 }}
                animate={{
                  x: isHovered ? "100%" : 0,
                }}
                transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                className="absolute w-full h-[2px] rounded-full bg-black bottom-0 left-0"
              />
            </motion.button>
          </div>
        </div>
      ))}

      <SetApart />
    </section>
  );
};

export default WhyUs;
