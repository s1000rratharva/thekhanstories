"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { projects } from "@/lib/projects";
import type { Project } from "@/lib/projects";
import { ImageFrame } from "@/components/ImageFrame";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * One sticky "print" in the deck. Its sticky top climbs a fixed --peek per
 * index, so every earlier card keeps a strip visible behind the current one.
 * The entry animation settles the print (rise + scale) as it slides over the
 * previous card; the tail recedes it slightly into the background.
 */
function StackCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const reduced = useReducedMotion();
  const isLast = index === total - 1;
  const num = pad(index + 1);

  /* This card's scroll segment within the shared stack container. */
  const segment = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [0, 1]
  );

  const scale = useTransform(
    segment,
    isLast ? [0, 0.8] : [0, 0.72, 0.84, 1],
    isLast ? [0.9, 1] : [0.9, 1, 1, 0.965]
  );
  const y = useTransform(segment, [0, 0.72], ["9vh", "0vh"]);
  const rotate = useTransform(
    segment,
    [0, 0.8],
    [index % 2 === 0 ? -0.6 : 0.6, 0]
  );
  const opacity = useTransform(
    segment,
    isLast ? [0, 0.5] : [0, 0.45, 0.88, 1],
    isLast ? [0.5, 1] : [0.5, 1, 1, 0.82]
  );

  const motionStyle = reduced
    ? undefined
    : { scale, y, rotate, opacity, willChange: "transform, opacity" };

  return (
    <motion.article
      style={{
        position: "sticky",
        top: `calc(var(--stack-top) + ${index} * var(--peek))`,
        height: `calc(100svh - var(--stack-top) - ${index} * var(--peek))`,
        zIndex: index + 1,
        ...motionStyle,
      }}
      className="stack-card group relative mx-auto block w-full max-w-[82rem] overflow-hidden border border-ink/10 bg-paper shadow-[0_36px_90px_-36px_rgba(20,18,15,0.5)]"
      aria-label={`${project.title} — project ${num} of ${pad(total)}`}
    >
      <div className="flex h-full min-h-0 flex-col">
        {/* Visual frame */}
        <div className="relative min-h-0 flex-1">
          <ImageFrame
            image={project.image}
            alt={project.alt}
            placeholderLabel={`PROJECT ${num}`}
            ratio="h-full w-full [aspect-ratio:auto]"
            zoom
          />
          {/* Project marker on the frame */}
          <p className="label absolute left-3 top-3 z-10 bg-paper/90 px-3 py-1.5 text-ink-soft backdrop-blur-sm sm:left-4 sm:top-4">
            Project {num}
          </p>
        </div>

        {/* Caption strip — behaves like the label on a photographic print */}
        <div className="flex items-center justify-between gap-4 border-t border-ink/10 bg-paper px-4 py-2.5 sm:px-6 sm:py-3.5">
          <div className="flex min-w-0 items-baseline gap-3">
            <span className="label text-accent">{num}</span>
            <h3 className="label truncate text-ink transition-colors duration-300 group-hover:text-accent">
              {project.title}
            </h3>
          </div>
          <p className="label flex shrink-0 items-center gap-3 text-muted">
            <span className="hidden sm:inline">{project.category}</span>
            <span aria-hidden="true" className="hidden sm:inline">
              ·
            </span>
            <span>{project.year}</span>
            <span aria-hidden="true">·</span>
            <span>
              {num} / {pad(total)}
            </span>
          </p>
        </div>
      </div>
    </motion.article>
  );
}

/**
 * Overlapping, scroll-pinned stack of project "prints". Each card is sticky
 * inside a shared container, so new projects slide up over — never below —
 * the previous ones. The outer container is measured for scroll progress;
 * each card reacts within its own segment.
 */
export function ProjectStack() {
  const total = projects.length;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full px-2 sm:px-4 lg:px-6"
    >
      {projects.map((project, index) => (
        <StackCard
          key={project.index}
          project={project}
          index={index}
          total={total}
          progress={scrollYProgress}
        />
      ))}
    </div>
  );
}