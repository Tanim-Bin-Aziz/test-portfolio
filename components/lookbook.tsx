"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const LOOKS = [
  {
    src: "/lookbook/01.png",
    alt: "Look 01 — model in a patterned black dress against the studio rails",
  },
  {
    src: "/lookbook/02.png",
    alt: "Look 02 — hand-on-hip pose in the patterned black dress",
  },
  {
    src: "/lookbook/03.png",
    alt: "Look 03 — full-length patterned black dress, centre stage",
  },
  {
    src: "/lookbook/04.png",
    alt: "Look 04 — studio portrait in the patterned black dress",
  },
  {
    src: "/lookbook/05.png",
    alt: "Look 05 — patterned black dress with a stepped pose",
  },
];

const POSITIONS = [
  "z-10 delay-200 [--x:-125px] [--y:-28px] [--r:-4deg] [--s:0.78] sm:[--x:-185px] sm:[--y:-38px] sm:[--r:-4deg] sm:[--s:0.82] lg:[--x:-340px] lg:[--y:-48px] lg:[--r:-4deg] lg:[--s:0.85] xl:[--x:-440px] xl:[--y:-55px] xl:[--r:-4deg] xl:[--s:0.86]",
  "z-20 delay-150 [--x:-72px] [--y:-18px] [--r:-2deg] [--s:0.88] sm:[--x:-110px] sm:[--y:-24px] sm:[--r:-2deg] sm:[--s:0.9] lg:[--x:-180px] lg:[--y:-28px] lg:[--r:-2deg] lg:[--s:0.93] xl:[--x:-235px] xl:[--y:-32px] xl:[--r:-2deg] xl:[--s:0.94]",
  "z-30",
  "z-20 delay-150 [--x:72px] [--y:-18px] [--r:2deg] [--s:0.88] sm:[--x:110px] sm:[--y:-24px] sm:[--r:2deg] sm:[--s:0.9] lg:[--x:180px] lg:[--y:-28px] lg:[--r:2deg] lg:[--s:0.93] xl:[--x:235px] xl:[--y:-32px] xl:[--r:2deg] xl:[--s:0.94]",
  "z-10 delay-200 [--x:125px] [--y:-28px] [--r:4deg] [--s:0.78] sm:[--x:185px] sm:[--y:-38px] sm:[--r:4deg] sm:[--s:0.82] lg:[--x:340px] lg:[--y:-48px] lg:[--r:4deg] lg:[--s:0.85] xl:[--x:440px] xl:[--y:-55px] xl:[--r:4deg] xl:[--s:0.86]",
];

export function Lookbook() {
  const fanRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(1);

  useEffect(() => {
    const node = fanRef.current;
    if (!node) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let innerTimer = 0;
    let outerTimer = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (reduceMotion) {
          setStage(5);
          return;
        }

        innerTimer = window.setTimeout(() => setStage(3), 450);
        outerTimer = window.setTimeout(() => setStage(5), 1250);
      },
      { threshold: 0.3 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.clearTimeout(innerTimer);
      window.clearTimeout(outerTimer);
    };
  }, []);

  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-ivory/10 bg-ink py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 size-[520px] rounded-full bg-coral/[0.07] blur-[140px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 className="order-1 text-[clamp(2.3rem,5.4vw,4.8rem)] leading-[0.95] font-light tracking-[-0.045em] text-ivory lg:order-2 lg:col-span-7 lg:text-right">
            Designed to make
            <span className="block text-coral italic">an entrance.</span>
          </h2>

          <div className="order-2 max-w-md lg:order-1 lg:col-span-5">
            <p className="flex items-center gap-3 text-[9px] tracking-[0.3em] text-ivory/45 uppercase">
              <span className="h-px w-8 bg-coral/70" />
              The Collection / 2026
            </p>
            <p className="mt-5 text-sm leading-relaxed text-ivory/55 sm:text-[15px]">
              At Bithi Farhana, we craft dresses that move with grace and speak
              with style. From sculptural eveningwear to modern silhouettes —
              designed to make every wearer feel effortlessly beautiful.
            </p>
          </div>
        </div>

        <div
          ref={fanRef}
          aria-label="Selected looks"
                className="relative mx-auto mt-14 h-[280px] w-full max-w-[1100px] sm:h-[380px] lg:mt-20 lg:h-[460px]"
        >
          <div
            aria-hidden
            className="absolute top-[78%] left-1/2 h-10 w-[72%] -translate-x-1/2 rounded-[50%] bg-black/50 blur-3xl"
          />

          {LOOKS.map((look, index) => {
            const isCenter = index === 2;
            const visible =
              isCenter ||
              (stage >= 3 && (index === 1 || index === 3)) ||
              (stage >= 5 && (index === 0 || index === 4));

            return (
              <div
                key={look.src}
                data-visible={visible ? "true" : "false"}
                className={`fan-card group absolute top-1/2 left-1/2 ${
                  isCenter
                    ? "z-30 w-[165px] sm:w-[220px] lg:w-[270px]"
                    : "w-[150px] sm:w-[200px] lg:w-[245px]"
                } ${POSITIONS[index]} aspect-[3/4] overflow-hidden rounded-[1.4rem] border border-white/15 bg-ink-soft shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]`}
              >
                <Image
                  src={look.src}
                  alt={look.alt}
                  fill
                  sizes="(min-width: 1024px) 270px, (min-width: 640px) 220px, 165px"
                  className="object-cover object-center grayscale-[0.12] transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-ivory/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] tracking-[0.24em] text-ivory/35 uppercase">
            Five looks · One point of view
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-[10px] tracking-[0.2em] text-ivory/65 uppercase transition-colors hover:text-coral"
          >
            Enquire about a look
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
