"use client"

import { motion, MotionValue, useScroll, useSpring, useTransform } from "framer-motion"
import { ReactNode, useEffect } from "react";

export default function Parallax() {
  const length = 4;
  const progress = useSpring(0);
  const x = useTransform(progress, [0, length - 1], ["0%", `-${(length - 1) * 100}%`]);
  const sections = Array.from({ length }, (_, i) => {
    const from = i - 0.1999999;
    const to = i + 1 - 0.1999999;
    return (
      <Section key={i} progress={progress} transform={[from, to]} />
    )
  });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsub = scrollYProgress.onChange((value) => {
      progress.set(value * length);
    });
    return () => {
      unsub();
    }
  }, []);

  return (
    <div className="relative" style={{ height: 100 * length + "vh" }}>
      <div className="flex justify-center flex-col  right-0 fixed left-0 mx-auto w-max text-center gap-2 top-10">
        <span className="text-xs font-extralight">OUR</span>
        <h2 className="text-4xl font-semibold">ROADMAP</h2>
      </div>
      <div className="h-max sticky top-0">
        <main className="h-screen w-full overflow-hidden relative">
          <motion.div
            style={{ x }}
            className="flex"
          >
            {sections}
          </motion.div>
        </main>
      </div>
    </div>

  )
}

function Section({
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