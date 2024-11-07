import { delay, stagger } from "framer-motion";

export const fadeIn = (direction, delay) => ({
  hidden: {
    opacity: 0,
    y: direction === "down" ? -50 : direction === "up" ? 50 : 0,
    x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      delay: delay,
      duration: 0.8,
      type: "tween",
      ease: [0.65, 0, 0.35, 1],
    },
  },
});

export const scale = {
  initial: {
    scale: 1,
  },
  enter: {
    scale: 0.98,
  },
  transition: {
    duration: 0.5,
    ease: [0.65, 0, 0.35, 1],
  },
};

export const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const mobileLinksVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

export const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};
