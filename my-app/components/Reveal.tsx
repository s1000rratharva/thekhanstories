"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before animating, after entering the viewport. */
  delay?: number;
  /** Vertical offset in px. */
  y?: number;
  /** When set, plays once on mount instead of on scroll. */
  instant?: boolean;
};

/**
 * Fade + rise on scroll into view.
 * MotionConfig reducedMotion="user" collapses the movement to a pure fade
 * for users who prefer reduced motion.
 */
export function Reveal({ children, className, delay = 0, y = 28, instant = false }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={instant ? false : { opacity: 0, y }}
      animate={instant ? { opacity: 1, y: 0 } : undefined}
      whileInView={instant ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.85, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}