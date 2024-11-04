import React from "react";
import { projects } from "../constants";
import Button from "../components/Button";
import Grid from "../components/Grid";
import { fadeIn } from "../constants/anim";
import { motion } from "framer-motion";

const FeaturedProjects = () => {
  const projectItems = projects.slice(0, 5);
  const exploreButton = projects[5]?.button;

  return (
    <section>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        className="flex items-center gap-8 p-6 sm:p-7 lg:p-8"
      >
        <h1 className="font-cabinet text-3xl font-medium sm:text-4xl lg:text-5xl 2xl:text-6xl min-w-fit">
          Featured Projects
        </h1>
        <div className="h-[2px] w-full bg-black rounded-full" />
      </motion.div>

      <Grid projectItems={projectItems} />

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        className="my-8 flex items-center justify-center"
      >
        {exploreButton && <Button button={exploreButton} />}
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;
