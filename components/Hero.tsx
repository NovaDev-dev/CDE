import Image from "next/image";
import { heroClips } from "./content";
import { ButtonFilled, ButtonOutline } from "./primitives/Type";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-rule">
      <div className="mx-auto grid max-w-shell grid-cols-1 items-center gap-10 px-5 pt-14 sm:px-8 sm:gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1fr)] lg:px-11 lg:pt-[100px]">
        <div className="min-w-0 pb-0 text-center lg:pb-[92px] lg:text-left">
          <p className="mb-10 font-body text-[11px] font-medium uppercase tracking-[0.3em] text-white">
            Escuela de baile · Calgary, AB
          </p>
          <h1 className="mb-9 font-display text-[clamp(56px,7.8vw,118px)] font-bold uppercase leading-[0.86] tracking-[-0.005em]">
            <span className="block text-flagYellow">Learn the</span>
            <span className="block text-flagBlue lg:pl-[0.16em]">rhythms</span>
            <span className="block text-heroRed lg:pl-[0.32em]">of Colombia</span>
          </h1>
          <p className="mx-auto mb-9 max-w-[41ch] text-[17px] leading-[1.55] text-cream/70 [text-wrap:pretty] sm:mb-11 sm:text-[19px] lg:mx-0">
            A four-week cultural training program. Wednesdays and Saturdays, two hours each, with Juan on salsa
            caleña and Sebas on Afro-Colombian rhythms and champeta. Everyone dances both, and then, we fusion all in one.
          </p>
          <div className="flex flex-wrap justify-center gap-[14px] lg:justify-start">
            <ButtonFilled href="#pases">Join the program</ButtonFilled>
            <ButtonOutline href="#programa">How it works</ButtonOutline>
          </div>
        </div>

        {/* Two looping GIFs, offset so they read as a pair */}
        <div className="grid min-w-0 grid-cols-2 items-start gap-3 pb-14 sm:gap-5 lg:pb-[92px]">
          {heroClips.map((c) => (
            <figure key={c.badge} className={`m-0 flex flex-col gap-3 ${c.offset}`}>
              <div className="relative aspect-[3/4] overflow-hidden bg-[#141110] rounded-[5px] transition-transform duration-[420ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-1">
                {/* Swap for <video muted loop autoPlay playsInline> if you export mp4 instead of gif */}
                <Image
                  src={c.src}
                  alt={c.caption}
                  fill
                  unoptimized
                  className="object-cover [filter:grayscale(0.35)_saturate(1.2)_contrast(1.06)_brightness(0.82)]"
                />
                <span
                  className="absolute bottom-3 left-3 right-3 px-2 py-[5px] font-body text-[9px] font-medium uppercase leading-[1.5] tracking-[0.24em]"
                  style={{ background: c.badgeBg, color: c.badgeFg }}
                >
                  {c.badge}
                </span>
              </div>
              <figcaption className="text-center font-body text-[10px] font-medium uppercase tracking-[0.22em] text-cream/50 lg:text-left">
                {c.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
