"use client";

import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { ArrowUpRight, Instagram } from "@/components/icons";

const CTA_LINES = [
  { text: "Let's create" },
  { text: "something worth" },
  { text: "remembering.", accent: true },
];

const INFO_ROWS = [
  { label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
  { label: "Phone / WhatsApp", value: site.contact.phone, href: `https://wa.me/${site.contact.phone.replace(/\D/g, "")}` },
  { label: "Instagram", value: site.contact.instagram.replace("https://", ""), href: site.contact.instagram },
  { label: "Based in", value: site.locationShort, href: null },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-line"
      aria-label="Contact — start a project"
    >
      <div className="mx-auto max-w-[106rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <Reveal y={16}>
          <p className="label flex items-center gap-3 text-muted">
            <span aria-hidden="true" className="inline-block h-px w-8 bg-current" />
            Contact
          </p>
        </Reveal>

        <h2 className="text-cta mt-8 max-w-[12ch] font-semibold uppercase text-ink">
          {CTA_LINES.map((line, i) => (
            <Reveal key={i} delay={0.06 * i} y={24}>
              <span className="block">
                {line.accent ? (
                  <em className="font-serif normal-case italic tracking-normal">
                    {line.text}
                  </em>
                ) : (
                  line.text
                )}
              </span>
            </Reveal>
          ))}
        </h2>

        <Reveal delay={0.25} y={20}>
          <p className="mt-10 max-w-md leading-relaxed text-muted">
            Available for photography, films, brand campaigns and creative
            collaborations in Mumbai and beyond.
          </p>
        </Reveal>

        <Reveal delay={0.3} y={20}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.contact.email}`}
              className="group label inline-flex items-center gap-3 bg-ink px-8 py-5 text-paper transition-colors duration-300 hover:bg-accent"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={site.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="label inline-flex items-center gap-3 border border-ink/30 px-8 py-5 text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </Reveal>

        <div className="mt-16 sm:mt-20">
          {INFO_ROWS.map((row, i) => (
            <Reveal key={row.label} delay={0.05 * i} y={16}>
              <div className="grid gap-2 border-t border-line py-5 sm:grid-cols-12 sm:items-center">
                <p className="label text-muted sm:col-span-3">{row.label}</p>
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="link-underline text-base font-medium text-ink sm:col-span-9"
                  >
                    {row.value}
                  </a>
                ) : (
                  <p className="text-base font-medium text-ink sm:col-span-9">
                    {row.value}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
          <div className="border-t border-line" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}