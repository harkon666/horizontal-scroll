"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HorizontalScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div ref={ref} className="h-[200vh] flex items-center justify-center">
      <motion.div
        className="flex space-x-10 whitespace-nowrap"
        style={{ x: translateX }}
      >
        <div className="bg-blue-500 p-10 text-white rounded-xl">Step 1</div>
        <div className="bg-blue-600 p-10 text-white rounded-xl">Step 2</div>
        <div className="bg-blue-700 p-10 text-white rounded-xl">Step 3</div>
        <div className="bg-blue-800 p-10 text-white rounded-xl">Step 4</div>
      </motion.div>
    </div>
  );
};

export default HorizontalScroll;
