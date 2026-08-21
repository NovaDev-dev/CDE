import Image from "next/image";
import { email, socials } from "./content";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-shell px-5 pt-16 sm:px-8 lg:px-11 lg:pt-[88px]">
      <div className="flex flex-col items-center gap-8 border-b border-ruleStrong pb-10 text-center lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:pb-11 lg:text-left">
        <h2 className="max-w-[14ch] font-display text-[clamp(44px,9vw,104px)] font-bold uppercase leading-[0.86]">
          Four weeks, one community
        </h2>
        <a
          href="#pases"
          className="whitespace-nowrap rounded-[3px] bg-flagYellow px-8 py-[16px] font-display text-[18px] font-bold uppercase tracking-[0.07em] text-ink transition-colors hover:bg-cream sm:px-11 sm:py-[21px] sm:text-[24px]"
        >
          Join the program
        </a>
      </div>
      <div className="flex flex-col items-center gap-6 pb-10 pt-7 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:text-left">
        <div className="flex flex-col items-center gap-[18px] sm:flex-row">
          <Image src="/images/logo.png" alt="CDE" width={180} height={60} className="h-11 w-auto sm:h-[60px]" />
          <p className="max-w-[34ch] font-body text-[10px] font-medium uppercase tracking-[0.26em] text-cream/40">
            Colombian Dance Experience · Escuela de baile · Calgary
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 font-body text-[14px] font-medium uppercase tracking-[0.14em] sm:items-end sm:text-[16px]">
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 sm:justify-end">
            {socials.map((s, i) => (
              <span key={s.url} className="flex gap-x-3">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 transition-colors hover:text-flagYellow"
                >
                  {s.label}
                </a>
                {i < socials.length - 1 ? <span className="text-cream/25">·</span> : null}
              </span>
            ))}
          </div>
          <a
            href={`mailto:${email}`}
            className="normal-case tracking-[0.06em] text-cream/70 transition-colors hover:text-flagYellow"
          >
            {email}
          </a>
        </div>
      </div>
    </footer>
  );
}
