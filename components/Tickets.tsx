import { passes } from "./content";
import { SectionHead, Shell, externalLinkProps } from "./primitives/Type";

export default function Tickets() {
  return (
    <section id="pases" className="border-b border-rule">
      <Shell className="py-16 lg:py-[104px]">
        <SectionHead
          className="mb-[60px]"
          kicker="Pases"
          title="What it costs"
          meta="CAD · secure checkout through Square"
        />
        <div className="grid grid-cols-1 border-t border-ruleStrong lg:grid-cols-2">
          {passes.map((p, i) => (
            <div
              key={p.key}
              className={`py-10 text-center lg:pr-10 lg:text-left ${
                i === passes.length - 1 ? "" : "border-b border-rule lg:mr-10 lg:border-b-0 lg:border-r lg:border-ruleStrong"
              }`}
            >
              <p
                className={`mb-[26px] font-body text-[10px] font-medium uppercase tracking-[0.24em] ${
                  p.featured ? "text-flagYellow" : "text-cream/40"
                }`}
              >
                {p.kicker}
              </p>
              <h3 className="mb-4 font-display text-[34px] font-bold uppercase leading-none">{p.name}</h3>
              <p
                className={`mb-[26px] font-display text-[64px] font-bold leading-[0.9] sm:text-[84px] ${
                  p.featured ? "text-flagYellow" : "text-cream"
                }`}
              >
                {p.price}
              </p>
              <p className="mb-8 font-body text-[11px] font-medium uppercase tracking-[0.18em] text-cream/[0.42]">
                {p.per}
              </p>
              <div className="mb-[38px] flex flex-col gap-3">
                {p.items.map((it) => (
                  <p key={it} className="text-[16px] leading-[1.45] text-cream/[0.72]">
                    {it}
                  </p>
                ))}
              </div>
              <a
                href={p.href}
                {...externalLinkProps(p.href)}
                className={`inline-block rounded-[3px] border px-7 py-[15px] font-display text-[16px] font-bold uppercase tracking-[0.08em] transition-colors duration-[260ms] ${
                  p.featured
                    ? "border-flagYellow bg-flagYellow text-ink hover:bg-cream hover:border-cream"
                    : "border-cream/35 text-cream hover:border-flagYellow hover:text-flagYellow"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </Shell>
    </section>
  );
}
