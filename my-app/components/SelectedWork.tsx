"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { ProjectStack } from "@/components/ProjectStack";

export function SelectedWork() {
  return (
    <section
      id="work"
      className="scroll-mt-20 border-t border-line"
      aria-label="Selected work"
    >
      <div className="mx-auto max-w-[106rem] px-5 pb-16 pt-20 sm:px-8 sm:pt-28 lg:px-10 lg:pt-32">
        <SectionHeading
          eyebrow="Portfolio"
          description="A collection of photographs, films and visual stories created across Mumbai and beyond."
        >
          Selected Work
        </SectionHeading>
      </div>

      <ProjectStack />

      <div className="h-24 sm:h-32" aria-hidden="true" />
    </section>
  );
}