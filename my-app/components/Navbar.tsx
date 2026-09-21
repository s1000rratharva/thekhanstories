"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";
import { EASE } from "@/lib/motion";
import { Close, Menu } from "@/components/icons";

function WordmarkButton({ onImage }: { onImage: boolean }) {
  return (
    <a
      href="#top"
      className={`label inline-flex items-baseline gap-1 transition-colors duration-500 ${
        onImage ? "text-paper" : "text-ink"
      }`}
      aria-label={`${site.name} — back to top`}
    >
      {site.name}
    </a>
  );
}

function DesktopNav({ onImage }: { onImage: boolean }) {
  return (
    <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
      {site.nav.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={`label link-underline transition-colors duration-300 ${
            onImage ? "text-paper/80 hover:text-paper" : "text-ink-soft hover:text-ink"
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function MobileMenu({ onImage }: { onImage: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className={`-m-2 p-2 transition-colors duration-500 ${
          onImage ? "text-paper" : "text-ink"
        } hover:text-accent`}
      >
        <Menu className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-paper"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="label inline-flex items-baseline gap-1 text-ink"
                aria-label={`${site.name} — close menu and go to top`}
              >
                {site.name}
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="-m-2 p-2 text-ink transition-colors hover:text-accent"
              >
                <Close className="h-6 w-6" />
              </button>
            </div>

            <nav
              aria-label="Primary"
              className="flex flex-1 flex-col justify-center gap-2 px-5 pt-6"
            >
              {site.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.08 * i }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline justify-between border-t border-line py-5"
                  >
                    <span className="text-section text-ink transition-transform duration-500 group-hover:-translate-x-1">
                      {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
                    </span>
                    <span className="label text-muted">0{i + 1}</span>
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.08 * site.nav.length }}
                className="border-t border-line pt-6"
              >
                <p className="label text-muted">{site.profession}</p>
                <p className="mt-2 text-sm text-ink-soft">{site.locationShort}</p>
              </motion.div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onImage = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ${
        scrolled
          ? "border-b border-line bg-paper/85 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[106rem] items-center justify-between px-5 py-4 sm:px-8 md:py-5 lg:px-10">
        <WordmarkButton onImage={onImage} />
        <DesktopNav onImage={onImage} />
        <MobileMenu onImage={onImage} />
      </div>
    </header>
  );
}