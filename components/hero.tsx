import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-svh overflow-hidden bg-ink text-ivory"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/media/hero-poster.jpg')" }}
        />
        <video
          className="absolute inset-0 size-full object-cover object-[58%_center] opacity-80 [filter:saturate(0.8)_contrast(1.05)] motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/hero-poster.jpg"
          aria-hidden
          tabIndex={-1}
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/55" />
        <div className="absolute inset-0 bg-[radial-gradient(75%_65%_at_78%_45%,rgba(231,160,139,0.2),transparent_70%)] mix-blend-screen" />
        <div className="grain absolute inset-0 opacity-[0.12]" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-3 rounded-[2rem] border border-ivory/10 sm:inset-5 lg:inset-6 lg:rounded-[2.5rem]"
      />

      <svg
        aria-hidden
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 size-full"
      >
        <path
          d="M 70 250 C 220 130 470 130 700 185 C 960 246 1180 340 1225 520 C 1262 668 1130 775 985 738 C 855 705 830 548 900 452 C 975 350 1130 320 1305 385"
          stroke="url(#hero-line)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M -40 690 C 260 610 520 640 760 700 C 1000 760 1200 810 1490 735"
          stroke="#e7a08b"
          strokeOpacity="0.14"
          strokeWidth="1"
          fill="none"
        />
        <defs>
          <linearGradient
            id="hero-line"
            x1="70"
            y1="250"
            x2="1250"
            y2="600"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#e7a08b" stopOpacity="0.15" />
            <stop offset="0.5" stopColor="#e7a08b" stopOpacity="0.65" />
            <stop offset="1" stopColor="#e7a08b" stopOpacity="0.15" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative mx-auto flex min-h-svh w-full max-w-[1440px] flex-col px-5 pt-28 pb-8 sm:px-8 sm:pb-10 lg:px-12 lg:pt-32">
        <div className="flex flex-1 items-center py-10 lg:py-6">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-6">
            <div className="fade-in relative lg:col-span-8 lg:pr-8">
              <h1 className="text-[clamp(1.75rem,8.5vw,2.6rem)] leading-[0.92] font-light tracking-[-0.05em] whitespace-nowrap text-ivory sm:text-[clamp(2.2rem,5.7vw,5rem)]">
                Bithi <span className="italic">Farhana</span> Islam
              </h1>

              <p className="mt-5 flex items-center gap-3 text-[9px] font-medium tracking-[0.32em] text-ivory/55 uppercase sm:mt-6 sm:text-[10px]">
                <span className="h-px w-8 shrink-0 bg-coral/70" />
                <span className="whitespace-nowrap">Fashion Designer</span>
                <span aria-hidden className="text-ivory/25">/</span>
                <span className="whitespace-nowrap sm:hidden">Dhaka</span>
                <span className="hidden whitespace-nowrap sm:inline">
                  Dhaka, Bangladesh
                </span>
              </p>

              <p className="mt-6 max-w-md text-pretty text-[13px] leading-relaxed text-ivory/70 sm:text-[15px] sm:mt-7">
                A Dhaka-based designer shaping sculptural silhouettes and
                hand-finished textiles — collections that move between quiet
                restraint and a quiet sense of drama.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="group inline-flex h-11 items-center gap-3 rounded-full bg-ivory px-5 text-[10px] font-medium tracking-[0.18em] text-ink uppercase transition-colors hover:bg-coral"
                >
                  Selected work
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="mailto:hello@bithifarhana.com?subject=Consultation%20request"
                  className="inline-flex h-11 items-center rounded-full border border-ivory/20 px-5 text-[10px] tracking-[0.18em] text-ivory/75 uppercase transition-colors hover:border-ivory/50 hover:text-ivory"
                >
                  Book a consultation
                </a>
              </div>
            </div>

            <div
              className="animate-rise relative z-10 lg:col-span-4 lg:-ml-8"
              style={{ animationDelay: "180ms" }}
            >
              <div className="mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:mr-0 lg:ml-auto lg:max-w-[400px]">
                <div className="mb-3 flex items-center justify-between text-[9px] tracking-[0.28em] text-ivory/55 uppercase">
                  <span>Portrait</span>
                  <span>01 / 04</span>
                </div>

                <figure className="group relative">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-2.5 rounded-[2.4rem] border border-coral/35 sm:-inset-3"
                  />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-ivory/20 bg-ink-soft">
                    <Image
                      src="/media/portrait.jpg"
                      alt="Portrait of fashion designer Bithi Farhana Islam"
                      fill
                      priority
                      sizes="(min-width: 1024px) 32vw, (min-width: 640px) 60vw, 80vw"
                      className="object-cover object-[50%_28%] brightness-110 grayscale-[0.15] contrast-[1.05] transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/5 to-transparent" />
                    <div className="absolute inset-0 bg-coral/10 mix-blend-soft-light" />

                    <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[9px] tracking-[0.26em] text-ivory/65 uppercase">
                          Bithi Farhana Islam
                        </p>
                        <p className="mt-1 text-sm text-ivory">
                          Designer · Dhaka
                        </p>
                      </div>
                      <span className="text-[9px] tracking-[0.24em] text-ivory/60">
                        2026
                      </span>
                    </figcaption>
                  </div>
                </figure>

                <div className="mt-5 flex items-center gap-2.5">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-coral opacity-70" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-coral" />
                  </span>
                  <p className="text-[9px] tracking-[0.24em] text-ivory/55 uppercase">
                    Open for 2026 commissions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-ivory/10 pt-5 text-[9px] tracking-[0.26em] text-ivory/40 uppercase lg:mt-12">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>Est. 2018</span>
            <span className="hidden h-3 w-px bg-ivory/15 sm:block" />
            <span>Couture · Ready-to-wear</span>
          </div>

          <span className="hidden text-ivory/30 lg:inline">
            23.8103° N · 90.4125° E
          </span>

          <a
            href="#contact"
            className="group flex items-center gap-3 text-ivory/55 transition-colors hover:text-ivory"
          >
            Scroll to explore
            <span className="relative flex h-7 w-3 items-center justify-center overflow-hidden">
              <span className="scroll-cue h-4 w-px bg-gradient-to-b from-transparent via-coral to-transparent" />
            </span>
            <ArrowDown className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute top-1/2 right-8 hidden -translate-y-1/2 xl:block">
        <p className="text-[9px] tracking-[0.42em] text-ivory/30 uppercase [writing-mode:vertical-rl]">
          Portfolio · MMXXVI
        </p>
      </div>
    </section>
  );
}
