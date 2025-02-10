"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7"];

const RoadmapLine = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: ref,
    axis: "x",
  });

  return (
    <div ref={ref} className="relative w-screen h-screen bg-yellow-400 overflow-x-auto flex items-center">
      <motion.div
        className="relative flex items-center space-x-20 min-w-[200vw] px-10"
        style={{
          transform: useTransform(scrollXProgress, [0, 1], ["translateX(0%)", "translateX(-50%)"]),
        }}
      >
        {/* Line */}
        <div className="absolute top-1/2 left-0 h-2 w-full bg-blue-500"></div>

        {/* Milestones */}
        {milestones.map((milestone, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {/* Circle */}
            <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
            {/* Label */}
            <span className="mt-2 text-white text-xl">{milestone}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RoadmapLine;
