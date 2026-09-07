// home_page/motion.js
export const revealSpring = {
  type: "spring",
  bounce: 0,
  duration: 0.9,
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const revealItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: revealSpring },
};

export const pressSpring = { type: "spring", stiffness: 400, damping: 25 };

export const viewportOnce = { once: true, margin: "-80px" };