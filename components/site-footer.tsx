import { ArrowUpRight } from "lucide-react";

const exploreLinks = [
  { label: "Work", href: "#work" },
  { label: "Films", href: "#films" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/bithifarhana" },
  { label: "Pinterest", href: "https://pinterest.com/bithifarhana" },
  { label: "Behance", href: "https://behance.net/bithifarhana" },
  { label: "LinkedIn", href: "https://linkedin.com/in/bithifarhana" },
];

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-ivory/10 bg-ink-soft"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-1/4 size-[520px] rounded-full bg-coral/10 blur-[130px]"
      />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.07]" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
        <div className="flex flex-col gap-10 border-b border-ivory/10 pb-14 lg:flex-row lg:items-end lg:justify-between lg:pb-16">
          <div>
            <p className="flex items-center gap-3 text-[9px] tracking-[0.3em] text-ivory/45 uppercase">
              <span className="h-px w-8 bg-coral/70" />
              Contact
            </p>
            <h2 className="mt-5 max-w-2xl text-[clamp(2.2rem,5.2vw,4.4rem)] leading-[0.95] font-light tracking-[-0.045em] text-ivory">
              Let&apos;s make something{" "}
              <span className="text-coral italic">unforgettable</span>.
            </h2>
          </div>

          <a
            href="mailto:hello@bithifarhana.com?subject=Project%20enquiry"
            className="group inline-flex items-center gap-3 self-start text-sm text-ivory/80 transition-colors hover:text-coral lg:self-auto"
          >
            hello@bithifarhana.com
            <span className="flex size-9 items-center justify-center rounded-full border border-ivory/20 transition-colors group-hover:border-coral">
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-14">
          <div className="sm:col-span-2 lg:col-span-5">
            <a
              href="#top"
              className="group inline-flex items-center gap-2.5"
              aria-label="Bithi Farhana Islam — home"
            >
              <span className="size-1.5 rounded-full bg-coral transition-transform duration-300 group-hover:scale-150" />
              <span className="text-[15px] font-medium tracking-[-0.01em] text-ivory">
                Bithi Farhana
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/50">
              A Dhaka-based fashion designer working across couture,
              ready-to-wear, and editorial — with an emphasis on considered
              construction and hand-finished detail.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[9px] tracking-[0.22em] text-ivory/45 uppercase">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1 transition-colors hover:text-coral"
                  >
                    {link.label}
                    <ArrowUpRight className="size-2.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3 lg:col-start-7">
            <p className="text-[9px] tracking-[0.28em] text-ivory/35 uppercase">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-ivory/65 transition-colors hover:text-ivory"
                  >
                    <span className="h-px w-0 bg-coral transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="text-[9px] tracking-[0.28em] text-ivory/35 uppercase">
              Studio
            </p>
            <address className="mt-5 space-y-1 text-sm leading-relaxed text-ivory/65 not-italic">
              <p>Dhaka, Bangladesh</p>
              <p>By appointment only</p>
              <p className="text-ivory/40">Sun–Thu · 10:00–18:00</p>
            </address>
            <p className="mt-5 text-[9px] tracking-[0.22em] text-ivory/35 uppercase">
              Available for commissions worldwide
            </p>
          </div>
        </div>
      </div>

      <div className="relative border-t border-ivory/10">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-3 px-5 py-6 text-[9px] tracking-[0.22em] text-ivory/35 uppercase sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© 2026 Bithi Farhana Islam. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Dhaka · Bangladesh
            <span className="size-1 rounded-full bg-coral/60" />
          </p>
        </div>
      </div>
    </footer>
  );
}
