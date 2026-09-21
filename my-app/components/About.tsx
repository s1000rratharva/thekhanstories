"use client";

import { Reveal } from "@/components/Reveal";
import { ImageFrame } from "@/components/ImageFrame";
import { site } from "@/lib/site";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-line"
      aria-label="About The Khan Stories"
    >
      <div className="mx-auto max-w-[106rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal y={16}>
              <p className="label flex items-center gap-3 text-muted">
                <span aria-hidden="true" className="inline-block h-px w-8 bg-current" />
                The Practice
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="text-section mt-6 font-semibold uppercase text-ink">
                About The{" "}
                <em className="font-serif normal-case tracking-normal italic">
                  Khan Stories
                </em>
              </h2>
            </Reveal>

            <Reveal delay={0.16} y={20}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
                {site.intro}
              </p>
            </Reveal>

            <Reveal delay={0.22} y={20}>
              <p className="mt-5 max-w-2xl leading-relaxed text-muted">
                Rooted in observation, the work is built around light, movement
                and emotion — quiet direction, honest moments, and a point of
                view that lets the subject lead.
              </p>
            </Reveal>

            <Reveal delay={0.28} y={20}>
              <p className="label mt-12 flex items-center gap-3 text-ink-soft">
                <span aria-hidden="true" className="inline-block h-px w-8 bg-current" />
                {site.locationShort} — Working wherever the story takes us
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15} y={36}>
              <div className="lg:ml-auto lg:max-w-md">
                <ImageFrame
                  image={null}
                  alt="Portrait of the photographer — place your image at /images/about-portrait.jpg"
                  placeholderLabel="PORTRAIT PLACEHOLDER"
                  ratio="aspect-[4/5]"
                  zoom
                />
                <p className="label mt-4 text-muted">
                  The face behind the lens — image coming soon
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}