import Image from "next/image";
import { venues } from "./content";
import { SectionHead, Shell, externalLinkProps } from "./primitives/Type";

/** Venue logos. SpanicArts uses a copy of its logo with the wordmark recoloured cream for the dark card. */
const logos: Record<
  string,
  { src: string; w: number; h: number; box: string }
> = {
  tropical: {
    src: "/images/venues/Tropical-trim.png",
    w: 354,
    h: 67,
    box: "h-14",
  },
  spanicarts: {
    src: "/images/venues/SpanicArts-light.png",
    w: 520,
    h: 490,
    box: "h-[120px]",
  },
};

/** Each venue's palette, from its own branding (tropicalyyc.ca for Tropical, the logo for SpanicArts). */
const themes: Record<
  string,
  {
    bg: string;
    border: string;
    bar: string;
    glow: string;
    chips: string[];
    pill: [string, string];
    cta: [string, string];
  }
> = {
  tropical: {
    bg: "linear-gradient(160deg, #1B1C0E 0%, #121208 100%)",
    border: "rgba(229,209,176,0.22)",
    bar: "linear-gradient(90deg, #636439, #E5D1B0 55%, #AD3114)",
    glow: "#AD3114",
    chips: ["#E5D1B0", "#C9A27A", "#D9583B", "#9C9D5C"],
    pill: ["#AD3114", "#F5ECD9"],
    cta: ["#E5D1B0", "#15160B"],
  },
  spanicarts: {
    bg: "linear-gradient(160deg, #1E0F2B 0%, #120A19 100%)",
    border: "rgba(160,90,210,0.35)",
    bar: "linear-gradient(90deg, #5D1F82 0 20%, #03B9BA 20% 40%, #C5157C 40% 60%, #F05817 60% 80%, #C9DA2A 80%)",
    glow: "#C5157C",
    chips: ["#03B9BA", "#E34A9E", "#F05817", "#C9DA2A"],
    pill: ["#03B9BA", "#0E0716"],
    cta: ["#03B9BA", "#0E0716"],
  },
};

export default function Venues() {
  return (
    <section id="clases" className="border-b border-rule">
      <Shell className="py-16 lg:py-[104px]">
        <SectionHead
          className="mb-14"
          kicker="Dos clases"
          title={
            <>
              Two rooms,
              <br />
              two vibes
            </>
          }
          meta={
            <>
              Same teachers · same rhythms
              <br />
              Different energy
            </>
          }
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {venues.map((v) => {
            const logo = logos[v.key];
            const t = themes[v.key];
            return (
              <article
                key={v.key}
                className="relative flex flex-col overflow-hidden rounded-[5px] border p-7 text-center sm:p-10 lg:text-left"
                style={{ background: t.bg, borderColor: t.border }}
              >
                <span
                  className="absolute inset-x-0 top-0 h-[5px]"
                  style={{ background: t.bar }}
                />
                <span
                  className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full opacity-[0.22] blur-3xl"
                  style={{ background: t.glow }}
                />

                <p
                  className="mb-6 font-body text-[11px] font-medium uppercase tracking-[0.3em]"
                  style={{ color: v.accent }}
                >
                  {v.vibe}
                </p>

                <div
                  className={`mb-7 flex items-center justify-center lg:justify-start ${logo ? logo.box : ""}`}
                >
                  {logo ? (
                    <>
                      <Image
                        src={logo.src}
                        alt={v.name}
                        width={logo.w}
                        height={logo.h}
                        className="h-full w-auto"
                      />
                      <h3 className="sr-only">{v.name}</h3>
                    </>
                  ) : (
                    <h3 className="font-display text-[44px] font-bold uppercase leading-none">
                      {v.name}
                    </h3>
                  )}
                </div>

                <div className="mb-7 flex flex-wrap justify-center gap-x-6 gap-y-2 border-y border-rule py-4 font-body text-[11px] font-medium uppercase tracking-[0.2em] text-cream/70 lg:justify-start">
                  <span>{v.day}</span>
                  <span>{v.time}</span>
                  <span
                    className="rounded-[2px] px-2"
                    style={{ background: t.pill[0], color: t.pill[1] }}
                  >
                    {v.start}
                  </span>
                </div>

                <p className="mb-7 text-[17px] leading-[1.55] text-cream/75 [text-wrap:pretty]">
                  {v.body}
                </p>

                <div className="mb-7 flex flex-wrap justify-center gap-2 lg:justify-start">
                  {v.rhythms.map((r, i) => {
                    const c = t.chips[i % t.chips.length];
                    return (
                      <span
                        key={r}
                        className="rounded-full border px-3 py-[6px] font-body text-[10px] font-medium uppercase tracking-[0.18em]"
                        style={{
                          color: c,
                          borderColor: `${c}66`,
                          background: `${c}14`,
                        }}
                      >
                        {r}
                      </span>
                    );
                  })}
                </div>

                <ul className="mb-9 flex flex-col gap-3">
                  {v.notes.map((n, i) => (
                    <li
                      key={n}
                      className="flex items-start justify-center gap-3 text-[15px] leading-[1.45] text-cream/70 lg:justify-start"
                    >
                      <span
                        className="mt-[6px] h-[7px] w-[7px] shrink-0 rotate-45"
                        style={{ background: t.chips[i % t.chips.length] }}
                      />
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col items-center gap-5 sm:flex-row sm:justify-between lg:items-end">
                  <a
                    href={v.map}
                    {...externalLinkProps(v.map)}
                    className="font-body text-[11px] font-medium uppercase leading-[1.8] tracking-[0.16em] text-cream/45 underline-offset-4 transition-colors hover:text-cream hover:underline"
                  >
                    {v.address}
                  </a>
                  <a
                    href="#pases"
                    className="inline-block shrink-0 rounded-[3px] px-6 py-[13px] font-display text-[15px] font-bold uppercase tracking-[0.08em] transition-opacity duration-[260ms] hover:opacity-85"
                    style={{ background: t.cta[0], color: t.cta[1] }}
                  >
                    See passes
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </Shell>
    </section>
  );
}
