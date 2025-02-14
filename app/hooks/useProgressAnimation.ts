import { useEffect, useCallback } from "react";
import { animate, MotionValue } from "framer-motion";

interface AnimationItem {
  threshold: number;
  elements: [string, Record<string, unknown>][];
}

const useProgressAnimation = (progress: MotionValue<number>) => {
  const animations = useCallback((val: number) => {

    const animationData: AnimationItem[] = [
      { threshold: 0.193, elements: [[".q1circle", { scale: 1.5 }], [".q1text", { opacity: 1, y: -50 }]] },
      { threshold: 0.226, elements: [[".q1smallcircle", { scale: 1.2 }], [".q1deschead", { opacity: 1, y: 0 }], [".q1desc", { opacity: 1, y: 0 }]] },
      { threshold: 0.33, elements: [[".q1smallcircle2", { scale: 1.2 }], [".q1deschead2", { opacity: 1, y: 0 }], [".q1desc2", { opacity: 1, y: 0 }]] },
      { threshold: 0.36, elements: [[".q1smallcircle3", { scale: 1.2 }], [".q1deschead3", { opacity: 1, y: 0 }], [".q1desc3", { opacity: 1, y: 0 }]] },
      { threshold: 0.441, elements: [[".q2circle", { scale: 1.5 }], [".q2text", { opacity: 1, y: -50 }]] },
      { threshold: 0.459, elements: [[".q2smallcircle", { scale: 1.2, fill: "#3b82f6" }], [".q2deschead", { opacity: 1, y: 0 }], [".q2desc", { opacity: 1, y: 0 }]] },
      { threshold: 0.5019, elements: [[".q2smallcircle2", { scale: 1.2, fill: "#3b82f6" }], [".q2deschead2", { opacity: 1, y: 0 }], [".q2desc2", { opacity: 1, y: 0 }]] },
      { threshold: 0.5245, elements: [[".q2smallcircle3", { scale: 1.2, fill: "#3b82f6" }], [".q2deschead3", { opacity: 1, y: 0 }], [".q2desc3", { opacity: 1, y: 0 }]] },
      { threshold: 0.5794, elements: [[".q3circle", { scale: 1.5 }], [".q3text", { opacity: 1, y: -50 }]] },
      { threshold: 0.5928, elements: [[".q3smallcircle", { scale: 1.2, fill: "#3b82f6" }], [".q3deschead", { opacity: 1, y: 0 }], [".q3desc", { opacity: 1, y: 0 }]] },
      { threshold: 0.6255, elements: [[".q3smallcircle2", { scale: 1.2, fill: "#3b82f6" }], [".q3deschead2", { opacity: 1, y: 0 }], [".q3desc2", { opacity: 1, y: 0 }]] },
      { threshold: 0.6859, elements: [[".q3smallcircle3", { scale: 1.2, fill: "#3b82f6" }], [".q3deschead3", { opacity: 1, y: 0 }], [".q3desc3", { opacity: 1, y: 0 }]] },
      { threshold: 0.718, elements: [[".q4circle", { scale: 1.5 }], [".q4text", { opacity: 1, y: -50 }]] },
      { threshold: 0.7558, elements: [[".q4smallcircle", { scale: 1.2, fill: "#3b82f6" }], [".q4deschead", { opacity: 1, y: 0 }], [".q4desc", { opacity: 1, y: 0 }]] },
      { threshold: 0.7855, elements: [[".q4smallcircle2", { scale: 1.2, fill: "#3b82f6" }], [".q4deschead2", { opacity: 1, y: 0 }], [".q4desc2", { opacity: 1, y: 0 }]] },
    ] as const;

    animationData.forEach(({ threshold, elements }) => {
      elements.forEach(([selector, animation]) => {
        const reverseAnimation: Record<string, unknown> = Object.fromEntries(
          Object.entries(animation).map(([key, value]) =>
            key === "scale"
              ? [key, 1]
              : key === "fill"
              ? [key, "#6b7280"]
              : key === "y"
              ? [key, 0]
              : key === "opacity"
              ? [key, 0]
              : [key, value]
          )
        );

        animate(selector, val >= threshold ? animation : reverseAnimation, {
          duration: 0.2,
          ease: val >= threshold ? "easeIn" : "easeOut",
        });
      });
    });
  }, []);

  useEffect(() => {
    const unsub = progress.on("change", animations);
    return () => {
      unsub()
    }
  }, [animations, progress]);
};

export default useProgressAnimation;
