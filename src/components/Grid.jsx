import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/anim";

const Grid = ({ projectItems }) => {
  return (
    <section className="overflow-hidden px-8">
      <div className="grid grid-cols-12 grid-rows-8 gap-6 md:gap-8 lg:gap-12 2xl:gap-16 max-sm:flex max-sm:flex-col">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="row-start-1 row-span-4 col-start-1 col-span-8"
        >
          <img
            src={projectItems[0].image}
            alt={projectItems[0].title}
            className="object-cover rounded-3xl w-full h-full"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="row-start-1 row-span-5 col-start-9 col-span-5"
        >
          <img
            src={projectItems[1].image}
            alt={projectItems[1].title}
            className="object-cover rounded-3xl w-full h-full"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="row-start-5 row-span-4 col-start-1 col-span-4"
        >
          <img
            src={projectItems[2].image}
            alt={projectItems[2].title}
            className="object-cover rounded-3xl w-full h-full"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="row-start-5 row-span-4 col-start-5 col-span-4"
        >
          <img
            src={projectItems[3].image}
            alt={projectItems[3].title}
            className="object-cover rounded-3xl w-full h-full"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="row-start-6 row-span-3 col-start-9 col-span-5"
        >
          <img
            src={projectItems[4].image}
            alt={projectItems[4].title}
            className="object-cover rounded-3xl w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Grid;
