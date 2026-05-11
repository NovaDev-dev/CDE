"use client";
import { useState } from "react";

const rhythms = [
  {
    num:         "01",
    name:        "Salsa Caleña",
    accent:      "#deb40d",
    description: "The flavor of Cali brought to Calgary. Swift footwork, pure musicality, and a connection to the floor that grabs you from the first step.",
    instructor:  "Juan",
  },
  {
    num:         "02",
    name:        "Salsa Choque",
    accent:      "#034ab1",
    description: "The energy of the Colombian Pacific. Afro-urban movements, percussion in the body, and a collective vibe that electrifies any dance floor.",
    instructor:  "Sebastián",
  },
  {
    num:         "03",
    name:        "Champeta",
    accent:      "#8d1217",
    description: "African roots, Caribbean heart. The rhythm of Cartagena that crosses borders — sensual, free, and completely authentic.",
    instructor:  "Sebastián",
  },
];

export default function Rhythms() {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <section id="rhythms" className="py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6 pb-8 border-b border-cream/10">
          <div>
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-yellow mb-5">
              The Rhythms
            </p>
            <h2
              className="font-condensed leading-[0.9] text-cream"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}
            >
              THREE STYLES,<br />ONE NIGHT.
            </h2>
          </div>
          <p className="font-sans text-cream/55 text-sm max-w-[260px] leading-relaxed md:text-right md:pb-2">
            Each rhythm, a unique identity. Each instructor, a story told through movement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {rhythms.map((r) => (
            <div key={r.name} className="rhythm-card border border-cream/10 bg-stone">
              {/* Thin accent bar */}
              <div className="h-[2px]" style={{ background: r.accent }} />

              <div className="p-8">
                {/* Number */}
                <p className="font-mono text-[10px] tracking-[0.3em] text-cream/40 mb-5 uppercase">
                  {r.num}
                </p>
                {/* Card title */}
                <h3 className="font-condensed text-4xl text-cream leading-none mb-2 tracking-wide">
                  {r.name}
                </h3>
                <p className="font-mono text-[10px] text-cream/50 uppercase tracking-[0.25em] mb-8">
                  con {r.instructor}
                </p>
                <button
                  onClick={() => setPlaying(playing === r.name ? null : r.name)}
                  className="w-9 h-9 border border-cream/20 font-mono text-xs text-cream/60 flex items-center justify-center hover:bg-yellow hover:text-night hover:border-yellow transition-colors"
                  aria-label={playing === r.name ? "Pausar" : "Reproducir"}
                >
                  {playing === r.name ? "■" : "▶"}
                </button>
              </div>

              <div className="rhythm-reveal">
                <p className="font-sans text-sm leading-relaxed text-night">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
