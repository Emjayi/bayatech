"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ElevatorLoading() {
  // Global scroll progress for the whole page
  const { scrollYProgress } = useScroll();

  // Floors move for the whole scroll range
  const floorsY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  // Visibility logic: appear after hero, hide after 2s of no scroll, show again on scroll
  const [isPastHero, setIsPastHero] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const idleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const pastHero = value > 0.05; // tweak threshold to match hero height
      setIsPastHero(pastHero);

      // User is actively scrolling -> not idle
      setIsIdle(false);

      // Reset idle timer
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
      idleTimeoutRef.current = setTimeout(() => {
        setIsIdle(true);
      }, 100);
    });

    return () => {
      unsubscribe();
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
    };
  }, [scrollYProgress]);

  const isVisible = !isIdle;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: !isPastHero ?  0.1 : (isVisible ? 1 : 0), y: isVisible ? 0 : -20 }}
      transition={{ duration: !isPastHero ? 2.5 : (isVisible ? 0.4 : 0.8), ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed w-full bg-transparent pointer-events-none z-40"
    >
      {/* Sticky centered elevator over all following sections */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-[380px] h-[460px] overflow-hidden">
          {/* Floors scroll with page/section progress */}
          {/* <motion.img
            src="home/floors.png"
            alt="Levels"
            style={{ y: floorsY }}
            className="absolute p-1 left-[10%] w-[80%] will-change-transform"
            draggable={false}
          /> */}

          {/* Elevator frame */}
          <img
            src="home/elevator.png"
            alt="Elevator"
            className="absolute inset-0 w-full h-full pointer-events-none"
            draggable={false}
          />
        </div>
      </div>
    </motion.div>
  );
}
