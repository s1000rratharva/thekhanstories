"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { site } from "@/lib/site";
import { EASE } from "@/lib/motion";
import { ImageFrame } from "@/components/ImageFrame";
import { ArrowDown, ArrowUpRight } from "@/components/icons";

/** Cleansed line reveal — text rises out of a clipped mask. */
function Line({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "105%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, ease: EASE, delay }}
        className={`block ${className}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const metaOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const bgMotion = reduced ? undefined : { y: bgY, scale: bgScale };

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink"
      aria-label="Introduction"
    >
      {/* Full-bleed hero frame — nearly the whole photo is visible */}
      <div className="absolute inset-0" aria-hidden="true">
        <motion.div style={bgMotion} className="absolute -inset-[4%]">
          <ImageFrame
            image="/images/hero.jpg"
            alt="Hero film still — opening frame of the showreel"
            priority
            ratio="h-full w-full [aspect-ratio:auto]"
          />
        </motion.div>
      </div>

      {/* Restrained legibility veil */}
      <div className="absolute inset-0 bg-ink/45" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink/70 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-[106rem] flex-1 flex-col px-5 pt-24 sm:px-8 sm:pt-28 lg:px-10">
        {/* Eyebrow row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="flex items-center justify-between border-b border-paper/25 pb-4"
        >
          <p className="label text-paper/85">
            {site.profession}
            <span className="ml-2 text-paper/60 md:inline">
              — {site.locationShort}
            </span>
          </p>
          <div className="label flex items-center gap-2 text-paper/60">
            <span className="hidden sm:inline">Scroll to explore</span>
            <motion.span
              aria-hidden="true"
              className="inline-flex"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="h-3.5 w-3.5" />
            </motion.span>
          </div>
        </motion.div>

        {/* Display headline */}
        <h1 className="mt-8 select-none text-hero font-extrabold uppercase leading-none tracking-tight text-paper sm:mt-12">
          <Line delay={0.15}>The</Line>
          <Line delay={0.28} className="font-serif italic normal-case tracking-normal">
            Khan
          </Line>
          <Line delay={0.41}>Stories</Line>
        </h1>

        {/* Meta + actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
          style={{ opacity: metaOpacity }}
          className="mt-auto flex flex-col justify-between gap-8 border-t border-paper/25 py-6 md:flex-row md:items-end"
        >
          <p className="max-w-md text-[0.95rem] leading-relaxed text-paper/80 sm:text-base">
            {site.tagline}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="group label inline-flex items-center gap-3 bg-paper px-7 py-4 text-ink transition-colors duration-300 hover:bg-accent hover:text-paper"
            >
              View Work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="label inline-flex items-center border border-paper/40 px-7 py-4 text-paper transition-colors duration-300 hover:border-paper hover:bg-paper hover:text-ink"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}