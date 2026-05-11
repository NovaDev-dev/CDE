"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-night">

      {/* Background */}
      <Image
        src="/images/hero.jpg"
        alt="CDE — Colombian Dance Experience"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-28 w-full">

        {/* Date label */}
        <p
          className="animate-fadeUp font-mono text-[12px] tracking-[0.5em] uppercase text-cream/55 mb-8"
          style={{ animationDelay: "0ms" }}
        >
          Calgary · AB 
        </p>

        {/* Logo */}
        <div
          className="animate-fadeUp mb-10"
          style={{ animationDelay: "120ms" }}
        >
          <Image
            src="/images/logo.png"
            alt="Colombian Dance Experience"
            width={900}
            height={300}
            className="w-auto max-w-[55vw] md:max-w-[280px] mx-auto"
          />
        </div>

        {/* Styles */}
        <p
          className="animate-fadeUp font-mono text-[10px] tracking-[0.35em] uppercase text-cream/50 mb-10"
          style={{ animationDelay: "460ms" }}
        >
          Salsa caleña&nbsp;&nbsp;/&nbsp;&nbsp;Salsa choque&nbsp;&nbsp;/&nbsp;&nbsp;Champeta
        </p>

        {/* CTAs */}
        <div
          className="animate-fadeUp flex gap-4 flex-wrap justify-center mb-10"
          style={{ animationDelay: "560ms" }}
        >
          <span className="btn-accent text-night/40 font-condensed text-2xl px-10 py-3 tracking-wide cursor-not-allowed select-none">
            Coming Soon
          </span>
          <a
            href="#rhythms"
            data-link=""
            className="bg-black/30 backdrop-blur-sm text-cream font-condensed text-2xl px-10 py-3 border border-cream/30 hover:border-cream transition-colors tracking-wide"
          >
            View Event
          </a>
        </div>

        {/* Location */}
        <p
          className="animate-fadeUp font-mono text-[10px] text-cream/40 tracking-[0.35em] uppercase"
          style={{ animationDelay: "640ms" }}
        >
          SpanicArts · Calgary, AB
        </p>

      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10" aria-hidden>
        <svg className="w-5 h-5 text-cream/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

    </section>
  );
}
