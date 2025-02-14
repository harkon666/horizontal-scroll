import { motion, useScroll, useTransform, MotionValue, useSpring, animate, cubicBezier } from "framer-motion";
import { useEffect, useRef, useState, ReactNode } from "react";

function RoadmapSection({
  transform,
  progress,
  children,
}: {
  children?: ReactNode;
  progress: MotionValue<number>;
  transform: [n: number, m: number];
}) {
  const strokeDashoffset = useTransform(progress, transform, [202, 0]);
  const scale1 = useTransform(strokeDashoffset, [202, 10], [0, 1]);
  const scale2 = useTransform(strokeDashoffset, [202, 150], [0, 1]);
  return (
    <section className="snap-start h-full w-screen shrink-0 relative">
      <div className="flex items-center h-full w-full">
        <svg viewBox="0 0 200 100" fill="none">
          <path d={`
                M 0 60 
                L 40 60 
                L 170 50 
                L 200 60 
              `}
            className="stroke-gray-800"
            strokeWidth={1}
          />
          <motion.path d={`
                M 0 60 
                L 40 60 
                L 170 50 
                L 200 60 
              `}
            strokeDasharray={202}
            className="stroke-purple-400"
            strokeWidth={1}
            style={{
              strokeDashoffset
            }}
          />
          <motion.ellipse cx={40} cy={60} rx={1.5} ry={1.5} style={{ scale: scale2 }} className="fill-purple-400" />
          <motion.ellipse cx={170} cy={50} rx={1.5} ry={1.5} style={{ scale: scale1 }} className="fill-purple-400" />
        </svg>
      </div>
      {children}
    </section>
  )
}

export default RoadmapSection