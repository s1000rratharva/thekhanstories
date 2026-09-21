import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  children: ReactNode;
  description?: ReactNode;
  className?: string;
};

/**
 * Editorial section header — small labeled eyebrow above a large display
 * heading, with an optional supporting line underneath.
 */
export function SectionHeading({
  eyebrow,
  children,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow ? (
        <Reveal y={16}>
          <p className="label flex items-center gap-3 text-muted">
            <span aria-hidden="true" className="inline-block h-px w-8 bg-current" />
            {eyebrow}
          </p>
        </Reveal>
      ) : null}
      <Reveal delay={0.08}>
        <h2 className="text-section mt-6 max-w-[16ch] font-semibold uppercase text-ink">
          {children}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.16} y={20}>
          <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}