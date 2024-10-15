"use client";
import { motion } from "framer-motion";
import { BackgroundLines } from "./background-lines";
const DesingIcons = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  return (
    <div className="w-full flex flex-wrap justify-center items-center">
      <div className="md:w-1/2 w-full mt-20 flex justify-start">
        <motion.div
          className="card "
          initial={{ opacity: 1, y: -100 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }} // Only animate once
        >
          <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 md:mt-0 sm:mt-10 mt-5  z-0">
            <h2 className="bg-clip-text dark:text-white text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              Indian Airlines, <br /> Sajana Textiles.
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg font-bold dark:opacity-50 dark:text-white text-center">
              Get the best advices from our experts, including expert artists,
              painters, marathon enthusiasts and RDX, totally free.
            </p>
          </BackgroundLines>
        </motion.div>
      </div>
      <div className="md:mt-20 mt-0 md:w-1/2 w-full justify-center md:justify-end flex ">
        <motion.svg
          viewBox="0 0 600 600"
          initial="hidden"
          animate="visible"
          className={` md:w-[500px] md:h-[500px] w-[300px] h-[300px]`}
        >
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            stroke="#ff0055"
            fill="none" // Ensure no background color
            variants={draw}
            custom={1}
          />
          <motion.line
            x1="220"
            y1="30"
            x2="360"
            y2="170"
            stroke="#00cc88"
            fill="none"
            variants={draw}
            custom={2}
          />
          <motion.line
            x1="220"
            y1="170"
            x2="360"
            y2="30"
            stroke="#00cc88"
            fill="none"
            variants={draw}
            custom={2.5}
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="30"
            rx="20"
            stroke="#0099ff"
            fill="none"
            variants={draw}
            custom={3}
          />
          <motion.circle
            cx="100"
            cy="300"
            r="80"
            stroke="#0099ff"
            fill="none"
            variants={draw}
            custom={2}
          />
          <motion.line
            x1="220"
            y1="230"
            x2="360"
            y2="370"
            stroke="#ff0055"
            fill="none"
            custom={3}
            variants={draw}
          />
          <motion.line
            x1="220"
            y1="370"
            x2="360"
            y2="230"
            stroke="#ff0055"
            fill="none"
            custom={3.5}
            variants={draw}
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="230"
            rx="20"
            stroke="#00cc88"
            fill="none"
            custom={4}
            variants={draw}
          />
          <motion.circle
            cx="100"
            cy="500"
            r="80"
            stroke="#00cc88"
            fill="none"
            variants={draw}
            custom={3}
          />
          <motion.line
            x1="220"
            y1="430"
            x2="360"
            y2="570"
            stroke="#0099ff"
            fill="none"
            variants={draw}
            custom={4}
          />
          <motion.line
            x1="220"
            y1="570"
            x2="360"
            y2="430"
            stroke="#0099ff"
            fill="none"
            variants={draw}
            custom={4.5}
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="430"
            rx="20"
            stroke="#ff0055"
            fill="none"
            variants={draw}
            custom={5}
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default DesingIcons;
