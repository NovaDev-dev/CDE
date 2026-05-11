const socials = [
  { name: "la guachafita", handle: "@coldanceexp", url: "https://instagram.com/coldanceexp" },
  { name: "Juan",      handle: "@dancejuanda",    url: "https://instagram.com/dancejuanda"    },
  { name: "Sebastián", handle: "@seb.a.z_sserna", url: "https://instagram.com/seb.a.z_sserna" },
];

const marqueeItems = [
  "Where Colombia meets Calgary", "✦",
  "Caleña · Choque · Champeta",    "✦",
  "SpanicArts",                   "✦",
];
const doubledMarquee = [...marqueeItems, ...marqueeItems];

import InstagramEmbed from "./InstagramEmbed";

const igPath =
  "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z";

export default function Footer() {
  return (
    <footer id="contact" className="bg-surface border-t border-cream/10">
      {/* Top marquee strip */}
      <div className="bg-stone py-3 overflow-hidden select-none border-b border-cream/10" aria-hidden>
        <div className="marquee-track">
          {doubledMarquee.map((item, i) => (
            <span
              key={i}
              className={`font-condensed text-2xl whitespace-nowrap pr-6 tracking-wide ${
                item === "✦" ? "text-yellow" : "text-cream/55"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Big CDE wordmark */}
      <div className="border-b border-cream/10 px-6 py-12">
        <p
          className="font-condensed leading-none text-cream max-w-6xl mx-auto"
          style={{ fontSize: "clamp(5rem, 18vw, 14rem)" }}
        >
          CDE
        </p>
        <p className="font-sans text-cream/45 text-base max-w-6xl mx-auto mt-3 tracking-wide">
          Colombian Dance Experience — Calgary, AB
        </p>
      </div>

      {/* Instagram post + follow panel */}
      <div className="border-b border-cream/10 px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Left: post */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-yellow mb-6">Latest Post</p>
            <InstagramEmbed />
          </div>

          {/* Right: text */}
          <div className="flex flex-col justify-center">
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-yellow mb-5">Follow Along</p>
            <h3
              className="font-condensed leading-[0.9] text-cream mb-8"
              style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
            >
              FOLLOW THE MOVEMENT.
            </h3>
            <p className="font-sans text-cream/50 text-sm leading-relaxed mb-10 max-w-sm">
              Stay up to date with classes, socials, and everything CDE.
              Follow us on Instagram and be part of the community.
            </p>
            <div className="space-y-6">
              {socials.map((s) => (
                <a
                  key={s.handle}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-link=""
                  className="flex items-center gap-4 group"
                >
                  <div className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center flex-shrink-0 group-hover:border-yellow transition-colors">
                    <svg className="w-4 h-4 text-cream/40 group-hover:text-yellow transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d={igPath} />
                    </svg>
                  </div>
                  <div>
                    <p className="font-condensed text-2xl text-cream tracking-wide leading-none group-hover:text-yellow transition-colors">{s.name}</p>
                    <p className="font-mono text-[10px] text-cream/35 tracking-wide mt-0.5">{s.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-cream/30">
          Where Colombia meets Calgary.
        </p>
        <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-cream/20">
          © {new Date().getFullYear()} CDE · All rights reserved.
        </p>
      </div>
    </footer>
  );
}
