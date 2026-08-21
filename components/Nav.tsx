"use client";

import Image from "next/image";
import { useState } from "react";
import { nav } from "./content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-[60] border-b border-rule bg-ink/[0.92] backdrop-blur-[10px]">
      <div className="mx-auto flex h-16 max-w-shell items-center justify-between gap-6 px-5 sm:h-20 sm:px-8 lg:px-11">
        <a href="#top" className="flex shrink-0 items-center gap-[13px]" onClick={() => setOpen(false)}>
          <Image src="/images/logo.png" alt="CDE" width={140} height={48} className="h-9 w-auto sm:h-12" priority />
          <span className="font-display text-[22px] font-bold uppercase leading-none sm:text-[27px]">CDE</span>
        </a>

        {/* Desktop links */}
        <div className="hidden gap-[26px] xl:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="whitespace-nowrap font-body text-[11px] font-medium uppercase tracking-[0.2em] text-cream/60 transition-colors hover:text-flagYellow"
            >
              {n.label}
            </a>
          ))}
        </div>

        <a
          href="#pases"
          className="hidden shrink-0 whitespace-nowrap rounded-[3px] bg-flagYellow px-6 py-[13px] font-display text-[15px] font-bold uppercase tracking-[0.09em] text-ink transition-colors hover:bg-cream sm:inline-block"
        >
          Join the program
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] xl:hidden"
        >
          <span
            className={`block h-[2px] w-[22px] bg-cream transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span className={`block h-[2px] w-[22px] bg-cream transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-[2px] w-[22px] bg-cream transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-rule bg-ink/[0.98] transition-[max-height] duration-300 ease-out xl:hidden ${
          open ? "max-h-[560px]" : "max-h-0 border-t-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-5 sm:px-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="py-[10px] text-center font-body text-[13px] font-medium uppercase tracking-[0.2em] text-cream/70 transition-colors hover:text-flagYellow"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#pases"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-[3px] bg-flagYellow px-6 py-[14px] text-center font-display text-[16px] font-bold uppercase tracking-[0.09em] text-ink sm:hidden"
          >
            Join the program
          </a>
        </div>
      </div>
    </div>
  );
}
