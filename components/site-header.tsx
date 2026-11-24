"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Films", href: "#films" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-ink/85 via-ink/40 to-transparent"
      />

      <div className="relative mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-24 lg:px-12">
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label="Bithi Farhana Islam — home"
        >
          <span className="text-[15px] font-medium tracking-[-0.01em] text-ivory">
            Bithi Farhana
          </span>
          <span className="hidden text-[9px] uppercase tracking-[0.26em] text-ivory/35 lg:inline">
            Fashion Designer
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-2 text-[10px] uppercase tracking-[0.24em] text-ivory/55 transition-colors hover:text-ivory"
            >
              {link.label}
              <span className="absolute inset-x-0 bottom-0 h-px w-0 bg-coral transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="mailto:hello@bithifarhana.com?subject=Project%20enquiry"
            className="group hidden h-10 items-center gap-2 rounded-full border border-ivory/20 px-5 text-[10px] uppercase tracking-[0.2em] text-ivory/80 transition-colors hover:border-coral hover:bg-coral hover:text-ink sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex size-11 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-colors hover:border-coral hover:text-coral md:hidden"
          >
            <Menu className="size-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] flex flex-col bg-ink/95 backdrop-blur-2xl md:hidden"
        >
          <div className="grain pointer-events-none absolute inset-0 opacity-[0.08]" />

          <div className="relative flex h-20 items-center justify-between px-5 sm:px-8">
            <span className="text-[15px] font-medium text-ivory">
              Bithi Farhana
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              autoFocus
              className="inline-flex size-11 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-colors hover:border-coral hover:text-coral"
            >
              <X className="size-5" strokeWidth={1.5} />
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="relative flex flex-1 flex-col justify-center px-5 sm:px-8"
          >
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4 border-b border-ivory/10 py-5 first:border-t"
              >
                <span className="text-[10px] tracking-[0.24em] text-coral/70">
                  0{index + 1}
                </span>
                <span className="text-4xl font-light tracking-[-0.04em] text-ivory transition-colors group-hover:text-coral sm:text-5xl">
                  {link.label}
                </span>
                <ArrowUpRight className="ml-auto size-5 text-ivory/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral" />
              </a>
            ))}
          </nav>

          <div className="relative px-5 pb-10 sm:px-8">
            <p className="text-[9px] uppercase tracking-[0.28em] text-ivory/40">
              Enquiries
            </p>
            <a
              href="mailto:hello@bithifarhana.com"
              className="mt-2 block text-lg text-ivory transition-colors hover:text-coral"
            >
              hello@bithifarhana.com
            </a>
            <p className="mt-4 text-xs text-ivory/40">
              Dhaka, Bangladesh · Available worldwide
            </p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
