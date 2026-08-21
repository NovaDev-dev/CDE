import Image from "next/image";
import { arc } from "./content";
import { Kicker, SectionTitle, Shell } from "./primitives/Type";

export default function Program() {
  return (
    <section id="programa" className="border-b border-rule">
      <div className="relative overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className="object-cover object-center [filter:grayscale(0.3)_saturate(1.2)_contrast(1.05)]"
        />
        <div className="absolute inset-0 bg-ink/85" />

        <div className="relative">
          <Shell className="pt-16 text-center lg:pt-[104px] lg:text-left">
            <Kicker className="mb-[22px]">El programa</Kicker>
            <SectionTitle className="mb-3">
              Four weeks
              <br />
              of Colombia
            </SectionTitle>
            <p className="mb-12 font-body text-[11px] font-medium uppercase tracking-[0.2em] text-cream/45 lg:mb-[68px]">
              4 weeks · 2 sessions a week · 2 hours each · open level 
            </p>
          </Shell>

          <div className="border-t border-rule">
            <Shell>
              <p className="pt-[30px] text-center font-body text-[10px] font-medium uppercase tracking-[0.24em] text-cream/40 lg:text-left">
                Every session follows the same arc
              </p>
              <div className="grid grid-cols-2 gap-y-8 pb-11 pt-[34px] lg:grid-cols-4 lg:gap-y-0">
                {arc.map((a, i) => (
                  <div
                    key={a.step}
                    className={`px-2 text-center lg:px-0 lg:pr-9 lg:text-left ${
                      i === arc.length - 1 ? "" : "lg:border-r lg:border-ruleStrong"
                    } ${i === 0 ? "" : "lg:pl-9"}`}
                  >
                    <p className="mb-4 font-display text-[26px] font-bold leading-none" style={{ color: a.accent }}>
                      {a.step}
                    </p>
                    <h3 className="mb-3 font-display text-[24px] font-bold uppercase leading-[1.02] sm:text-[30px]">{a.title}</h3>
                    <p className="text-[15px] leading-[1.55] text-cream/[0.62] [text-wrap:pretty]">{a.body}</p>
                  </div>
                ))}
              </div>
            </Shell>
          </div>
        </div>
      </div>

      <div className="border-t border-rule bg-flagYellow text-ink">
        <div className="mx-auto grid max-w-shell items-center gap-5 px-5 py-9 text-center sm:px-8 lg:grid-cols-[200px_1fr] lg:gap-12 lg:px-11 lg:text-left">
          <p className="font-display text-[36px] font-bold uppercase leading-none sm:text-[44px]">"Batida"</p>
          <p className="mx-auto max-w-[64ch] text-[17px] font-medium sm:text-[19px] lg:mx-0">
            A rhythm where the two of us fuse Salsa with Afro, Champeta and Salsa Choque.
          </p>
        </div>
      </div>
    </section>
  );
}
