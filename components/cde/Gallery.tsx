import Image from "next/image";

const tiles = [
  { n: 1, caption: "Having fun during class · May 2ⁿᵈ",  tilt: "tilt-l",  tape: { top: "-10px", left: "50%", transform: "translateX(-50%) rotate(-4deg)" } },
  { n: 2, caption: "Social Night · Calgary", tilt: "tilt-r",  tape: { top: "-10px", left: "50%", transform: "translateX(-50%) rotate(3deg)"  } },
  { n: 3, caption: "El rey del visaje · Champeta with Seb", tilt: "tilt-ll", tape: { top: "-10px", left: "50%", transform: "translateX(-50%) rotate(-6deg)" } },
  { n: 4, caption: "Juli and friends · Caleña with Juli May 2ⁿᵈ",   tilt: "tilt-r",  tape: { top: "-10px", left: "50%", transform: "translateX(-50%) rotate(4deg)"  } },
  { n: 5, caption: "Los Profes · Caleña Partnerwork",   tilt: "tilt-l",  tape: { top: "-10px", left: "50%", transform: "translateX(-50%) rotate(-3deg)" } },
  { n: 6, caption: "El team · 2026",           tilt: "tilt-rr", tape: { top: "-10px", left: "50%", transform: "translateX(-50%) rotate(7deg)"  } },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-8 pb-8 border-b border-cream/8">
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-yellow mb-5">
            Gallery
          </p>
          <h2
            className="font-condensed leading-[0.9] text-cream"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            THE DANCE SPEAKS FOR ITSELF.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-16">
          {tiles.map((tile) => (
            <div key={tile.n} className={`relative ${tile.tilt}`}>
              {/* Tape */}
              <div className="tape w-14 h-5" style={tile.tape} aria-hidden />

              {/* Photo slot */}
              <div
                className="relative aspect-square overflow-hidden border border-cream/8 bg-stone"
                style={{ boxShadow: "4px 4px 0 rgba(236,124,13,0.25)" }}
              >
                <Image
                  src={`/images/gallery/${tile.n}.jpg`}
                  alt={tile.caption}
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 300px"
                  className="object-cover"
                  priority={tile.n <= 3}
                />

                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-night/80 px-3 py-2">
                  <p className="font-mono text-[9px] text-cream/55 uppercase tracking-widest truncate">
                    {tile.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
