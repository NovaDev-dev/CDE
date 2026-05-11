import Image from "next/image";

const instructors = [
  {
    name:       "Juan",
    slug:       "juan",
    handle:     "@dancejuanda",
    profileUrl: "https://instagram.com/dancejuanda",
    styles:     ["Salsa Caleña", "Salsa Fusion"],
    bio:        "A Salsa Caleña dancer based in Calgary. His mission: to share the essence of Cali's style with a community that grows every day.",
    quote:      "Salsa Caleña isn't explained — it's felt.",
  },
  {
    name:       "Sebastián",
    slug:       "sebastian",
    handle:     "@seb.a.z_sserna",
    profileUrl: "https://instagram.com/seb.a.z_sserna",
    styles:     ["Salsa Choque", "Champeta", "Afro", "House"],
    bio:        "An urban dancer with roots in the Colombian coast. He fuses Afro tradition with body language to create something unique in every performance.",
    quote:      "The body is the instrument — rhythm, the score.",
  },
];

export default function Instructors() {
  return (
    <section id="instructors" className="py-32 px-6 bg-night">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-8 pb-8 border-b border-cream/10">
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-yellow mb-5">
            Instructors
          </p>
          <h2
            className="font-condensed leading-[0.9] text-cream"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            THE MOVERS OF THE NIGHT.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-20 mt-16">
          {instructors.map((inst) => (
            <div key={inst.name} className="relative">

              {/* Tape */}
              <div
                className="tape w-20 h-5 tilt-l"
                style={{ top: "-10px", left: "32px" }}
                aria-hidden
              />

              {/* Photo */}
              <div
                className="relative w-full aspect-[4/3] overflow-hidden border border-cream/10 mb-8 bg-stone"
                style={{ boxShadow: "6px 6px 0 #ec7c0d" }}
              >
                <Image
                  src={`/images/instructors/${inst.slug}.jpg`}
                  alt={inst.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>

              {/* Name */}
              <h3
                className="font-condensed leading-none text-cream mb-2"
                style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
              >
                {inst.name.toUpperCase()}
              </h3>

              <a
                href={inst.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-link=""
                className="font-mono text-[10px] tracking-[0.25em] uppercase text-cream/45 hover:text-yellow transition-colors"
              >
                {inst.handle}
              </a>

              <div className="flex flex-wrap gap-2 mt-4 mb-6">
                {inst.styles.map((s) => (
                  <span
                    key={s}
                    className="border border-cream/20 font-mono text-[10px] px-2 py-0.5 uppercase tracking-[0.2em] text-cream/55"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <p className="text-cream/70 text-sm leading-relaxed mb-7">{inst.bio}</p>

              <p className="font-sans italic text-lg text-cream/90 border-l-2 border-yellow pl-5">
                "{inst.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
