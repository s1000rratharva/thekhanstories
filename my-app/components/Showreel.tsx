"use client";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Play } from "@/components/icons";

/**
 * Showreel — large cinematic video placeholder.
 *
 * SWAP IN A REAL VIDEO LATER by replacing the placeholder block below:
 *  - MP4:      <video controls className="h-full w-full object-cover" src="/videos/showreel.mp4" />
 *  - Vimeo:    <iframe src="https://player.vimeo.com/video/<id>?autoplay=1" className="h-full w-full" allow="autoplay; fullscreen" />
 *  - YouTube:  <iframe src="https://www.youtube.com/embed/<id>?rel=0&autoplay=1" className="h-full w-full" allow="autoplay; fullscreen; picture-in-picture" />
 * Drop files into /public/videos/ as needed.
 */
export function Showreel() {
  return (
    <section className="scroll-mt-20 border-t border-line" aria-label="Showreel">
      <div className="mx-auto max-w-[106rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Showreel">Watch the Showreel</SectionHeading>
          <Reveal delay={0.2} y={16}>
            <p className="label flex items-center gap-3 text-muted md:pb-2">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-current" />
              Selected frames — 2024 / 25
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} y={40}>
          <div className="group relative mt-12 aspect-video w-full overflow-hidden border border-line bg-paper-deep sm:mt-16">
            {/* -- REPLACE THIS PLACEHOLDER BLOCK WITH YOUR VIDEO -- */}
            <div className="placeholder-bg relative flex h-full w-full items-center justify-center">
              <span className="label absolute inset-x-0 top-5 text-center text-muted sm:top-8">
                SHOWREEL VIDEO PLACEHOLDER
              </span>

              <button
                type="button"
                aria-label="Play showreel — video coming soon"
                className="relative grid h-20 w-20 place-items-center rounded-full border border-ink/40 text-ink transition-all duration-500 group-hover:scale-105 group-hover:border-accent group-hover:bg-accent group-hover:text-paper sm:h-28 sm:w-28"
              >
                <span
                  aria-hidden="true"
                  className="play-ring absolute inset-0 rounded-full border border-ink/30"
                />
                <Play className="ml-1 h-7 w-7 sm:h-9 sm:w-9" />
              </button>

              <span className="label absolute inset-x-0 bottom-5 text-center text-muted sm:bottom-8">
                Drop your film at /public/videos/showreel.mp4
              </span>
            </div>
            {/* -- END PLACEHOLDER -- */}
          </div>
        </Reveal>
      </div>
    </section>
  );
}