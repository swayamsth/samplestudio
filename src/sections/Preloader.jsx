import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [index, setIndex] = useState(0);

  const preloaderWords = [
    "samplestudio",
    "Crafting",
    "Designing",
    "Transforming",
    "Inspiring",
    "Refining",
    "Elevating",
    "samplestudio",
  ];
  const slideUp = {
    initial: {
      y: 0,
    },
    exit: {
      y: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  const opacity = {
    initial: { opacity: 0 },
    animate: {
      opacity: 0.9,
      transition: { duration: 1, delay: 0.2 },
    },
  };

  useEffect(() => {
    if (index === preloaderWords.length - 1) return;

    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );
  }, [index]);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="bg-[#141516] h-screen w-screen flex justify-center items-center fixed z-50"
    >
      <motion.p
        variants={opacity}
        initial="initial"
        animate="animate"
        className="font-cabinet text-white text-5xl max-sm:text-2xl max-lg:text-3xl"
      >
        {preloaderWords[index]}
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
