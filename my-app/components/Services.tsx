"use client";

import { services } from "@/lib/services";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 border-t border-line"
      aria-label="Services — what I do"
    >
      <div className="mx-auto max-w-[106rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Capabilities"
          description="Three ways of working — or one continuous service that spans all of them."
        >
          What I Do
        </SectionHeading>

        <div className="mt-16 sm:mt-24">
          {services.map((service, i) => (
            <Reveal key={service.index} delay={i * 0.05} y={24}>
              <div className="group grid gap-6 border-t border-line py-8 transition-colors duration-500 hover:bg-paper-deep/40 sm:py-10 md:grid-cols-12 md:items-center md:gap-4 lg:px-6 lg:py-12">
                <p className="label text-muted md:col-span-1 md:pl-2">
                  {service.index}
                </p>

                <h3 className="text-[clamp(1.9rem,4vw,4rem)] font-semibold uppercase leading-none tracking-tight text-ink transition-colors duration-500 group-hover:text-accent md:col-span-4">
                  {service.title}
                </h3>

                <ul className="flex flex-wrap content-start gap-x-3 gap-y-2 md:col-span-4 md:items-start">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="label inline-flex items-center gap-3 text-ink-soft [&:not(:first-child)]:before:content-['·'] [&:not(:first-child)]:before:text-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="max-w-xs text-sm leading-relaxed text-muted md:col-span-3 md:text-right">
                  {service.note}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-line" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}