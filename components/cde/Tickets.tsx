const details = [
  { label: "Date",     value: "Check the event link"        },
  { label: "Venue",    value: "SpanicArts · Calgary, AB"   },
  { label: "Format",   value: "Classes + Dance Social"     },
  { label: "Price",    value: "$15 CAD"                    },
];

const perks = [
  "Salsa Caleña class",
  "Salsa Choque class",
  "Champeta class",
  "Dance social included",
  "Professional instructors",
  "Latin community in Calgary",
];

export default function Tickets() {
  return (
    <section id="tickets" className="py-32 px-6 bg-night">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-16 pb-8 border-b border-cream/8">
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-yellow mb-5">
            Tickets
          </p>
          <h2
            className="font-condensed leading-[0.9] text-cream"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            ONE COMPLETE NIGHT.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: event info */}
          <div className="space-y-6">
            {details.map((d) => (
              <div key={d.label} className="border-b border-cream/8 pb-5">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-cream/30 mb-1">{d.label}</p>
                <p className="font-condensed text-3xl text-cream tracking-wide">{d.value}</p>
              </div>
            ))}
          </div>

          {/* Right: ticket stub */}
          <div>
            <div
              className="border border-cream/12"
              style={{ boxShadow: "8px 8px 0 rgba(236,124,13,0.3)" }}
            >
              {/* Header — accent gradient block */}
              <div className="btn-accent px-8 pt-6 pb-5">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-night/50 mb-1">
                  Colombian Dance Experience
                </p>
                <p
                  className="font-condensed leading-none text-night"
                  style={{ fontSize: "5rem" }}
                >
                  $15 CAD
                </p>
              </div>

              {/* Perforated edge */}
              <div className="relative flex items-center border-y border-dashed border-cream/12 bg-stone h-5">
                <div className="absolute -left-3 w-7 h-7 rounded-full bg-night border border-cream/12" />
                <div className="absolute -right-3 w-7 h-7 rounded-full bg-night border border-cream/12" />
              </div>

              {/* Perks + CTA */}
              <div className="bg-stone p-8">
                <ul className="space-y-3 mb-10">
                  {perks.map((p) => (
                    <li key={p} className="flex items-center gap-3 font-mono text-xs text-cream/45">
                      <span className="text-yellow font-bold text-sm">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>

                <span className="block w-full btn-accent text-night/40 font-condensed text-center py-4 text-3xl tracking-wider cursor-not-allowed select-none">
                  Coming Soon
                </span>

                <p className="font-mono text-[10px] text-center text-cream/20 tracking-[0.25em] uppercase mt-4">
                  SpanicArts · Calgary
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
