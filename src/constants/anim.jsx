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
