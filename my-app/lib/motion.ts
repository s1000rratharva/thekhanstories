import type { Variants } from "framer-motion";

/** Signature easing curve used across the site — soft, cinematic. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Fade + rise, used for scroll-in reveals. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE, delay },
  }),
};

/** Simple fade for overlays and menus. */
export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

/** Stagger container for groups of children. */
export const stagger: Variants = {
  hidden: {},
  visible: (staggerChildren: number = 0.08) => ({
    transition: { staggerChildren },
  }),
};