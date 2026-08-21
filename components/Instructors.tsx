import Image from "next/image";
import { teachers } from "./content";
import { Kicker, SectionTitle, Shell } from "./primitives/Type";

export default function Instructors() {
  return (
    <section id="profes" className="border-b border-rule bg-inkAlt">
      <Shell className="py-16 text-center lg:py-[104px] lg:text-left">
        <Kicker className="mb-[22px]">Los profes</Kicker>
        <SectionTitle className="mb-[60px]">Who teaches you</SectionTitle>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {teachers.map((t) => (
            <div
              key={t.name}
              className="grid grid-cols-1 items-start gap-5 text-center sm:grid-cols-[190px_1fr] sm:gap-7 sm:text-left"
            >
              <div className="relative mx-auto aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-[5px] transition-transform duration-[420ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-1 sm:mx-0 sm:max-w-none">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  className="object-cover object-top [filter:grayscale(0.35)_saturate(1.15)_contrast(1.05)]"
                />
              </div>
              <div>
                <h3 className="mb-2 font-display text-[44px] font-bold uppercase leading-[0.88] sm:text-[56px]">{t.name}</h3>
                <a
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[11px] font-medium uppercase tracking-[0.18em] text-cream/45 transition-colors hover:text-flagYellow"
                >
                  {t.handle}
                </a>
                <p
                  className="mb-4 mt-5 font-body text-[11px] font-medium uppercase tracking-[0.18em]"
                  style={{ color: t.accent }}
                >
                  {t.styles}
                </p>
                <p className="mb-5 text-[16px] leading-[1.6] text-cream/[0.68] [text-wrap:pretty]">{t.bio}</p>
                <p className="font-display text-[25px] font-semibold uppercase leading-[1.15] text-cream/[0.92]">
                  “{t.quote}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </Shell>
    </section>
  );
}
