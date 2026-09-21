"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/**
 * Subtle custom cursor for precise pointers (desktop).
 * A small dot tracks the pointer; a trailing ring sits behind it and
 * grows slightly over interactive elements. Only visible on `pointer: fine`
 * devices (CSS-gated), and skipped entirely for reduced-motion users.
 */
export function CustomCursor() {
  const reduced = useReducedMotion();
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 220, damping: 30, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 220, damping: 30, mass: 0.6 });

  useEffect(() => {
    if (reduced) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e: PointerEvent) => {
      const target = (e.target as HTMLElement).closest?.(
        "a, button, [data-cursor]"
      );
      setHovering(Boolean(target));
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [reduced, x, y]);

  if (reduced) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-1.5 w-1.5 -ml-[3px] -mt-[3px] rounded-full bg-ink [@media(pointer:fine)]:block"
        style={{ x, y }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-9 w-9 -ml-[18px] -mt-[18px] rounded-full border border-ink/30 [@media(pointer:fine)]:block"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 1.6 : 1, opacity: hovering ? 0.9 : 0.6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </>
  );
}