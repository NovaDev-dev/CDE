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
        <div className="grid grid-cols-1 gap-px border-y border-ruleStrong bg-rule sm:grid-cols-2 xl:grid-cols-4">
          {passes.map((p) => (
            <div key={p.key} className="flex flex-col bg-ink px-2 py-10 text-center sm:px-8 lg:text-left xl:first:pl-0 xl:last:pr-0">
              <p
                className={`mb-[26px] font-body text-[10px] font-medium uppercase tracking-[0.24em] ${
                  p.featured ? "text-flagYellow" : p.accent ? "" : "text-cream/40"
                }`}
                style={p.accent ? { color: p.accent } : undefined}
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
              <div className="mb-[38px] flex flex-1 flex-col gap-3">
                {p.items.map((it) => (
                  <p key={it} className="text-[16px] leading-[1.45] text-cream/[0.72]">
                    {it}
                  </p>
                ))}
              </div>
              <a
                href={p.href}
                {...externalLinkProps(p.href)}
                className={`inline-block self-center rounded-[3px] border px-7 py-[15px] font-display text-[16px] font-bold uppercase tracking-[0.08em] transition-colors duration-[260ms] lg:self-start ${
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
