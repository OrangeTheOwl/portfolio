"use client";

import { motion, useReducedMotion } from "framer-motion";

const linePaths = [
  "M-40 140 C 170 55, 360 245, 560 165 S 965 55, 1240 170",
  "M-20 290 C 220 190, 430 405, 640 300 S 975 210, 1240 335",
  "M-60 450 C 180 360, 390 575, 620 465 S 965 370, 1260 495",
  "M120 560 C 310 495, 535 635, 790 555 S 1080 500, 1240 575",
];

export default function HeroLineBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.svg
        viewBox="0 0 1200 700"
        preserveAspectRatio="none"
        className="h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {linePaths.map((path, index) => (
          <motion.path
            key={path}
            d={path}
            fill="none"
            stroke={index % 2 === 0 ? "rgba(241, 93, 14, 0.42)" : "rgba(47, 111, 208, 0.34)"}
            strokeWidth={index === 3 ? 1.5 : 2.2}
            strokeLinecap="round"
            initial={
              reduceMotion
                ? { pathLength: 1, opacity: 0.35 }
                : { pathLength: 0, opacity: 0 }
            }
            animate={
              reduceMotion
                ? { pathLength: 1, opacity: 0.35 }
                : { pathLength: 1, opacity: [0, 0.55, 0.32] }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 1.7,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }
            }
          />
        ))}
      </motion.svg>
    </div>
  );
}
