import Image from "next/image";
import { gallery } from "./content";
import { Kicker, SectionTitle, Shell } from "./primitives/Type";

export default function Gallery() {
  return (
    <section id="salon" className="border-b border-rule bg-inkAlt">
      <Shell className="py-[104px]">
        <div className="mb-12 text-center sm:mb-14 sm:text-left">
          <Kicker className="mb-[22px]">LA GALERIA</Kicker>
          <SectionTitle>passion, floors, sweat</SectionTitle>
        </div>
        <div className="grid grid-cols-2 auto-rows-[120px] gap-3 [grid-auto-flow:dense] sm:auto-rows-[150px] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[190px]">
          {gallery.map((g) => (
            <div
              key={g.src + g.caption}
              className={`group relative overflow-hidden rounded-[5px] border border-cream/10 transition-all duration-[420ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-1 hover:border-[color:var(--tile-accent)] ${g.span}`}
              style={{ "--tile-accent": g.accent } as React.CSSProperties}
            >
              {g.video ? (
                <video
                  src={g.src}
                  poster={g.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover [filter:grayscale(0.45)_saturate(1.05)_contrast(1.05)] transition-[filter] duration-[420ms] group-hover:[filter:grayscale(0.1)_saturate(1.25)_contrast(1.08)]"
                />
              ) : (
                <Image
                  src={g.src}
                  alt={g.caption}
                  fill
                  className="object-cover [filter:grayscale(0.45)_saturate(1.05)_contrast(1.05)] transition-[filter] duration-[420ms] group-hover:[filter:grayscale(0.1)_saturate(1.25)_contrast(1.08)]"
                />
              )}
              {g.video && (
                <span className="absolute right-3 top-3 rounded-full border border-cream/40 px-[9px] py-[4px] font-body text-[9px] font-medium uppercase tracking-[0.2em] text-cream/90 backdrop-blur-[4px]">
                  Video
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-90 transition-opacity duration-[420ms] group-hover:opacity-50" />
              <p className="absolute bottom-[14px] left-4 font-body text-[10px] font-medium uppercase tracking-[0.2em] text-cream/85 [text-shadow:0_1px_8px_rgba(0,0,0,0.9)]">
                {g.caption}
              </p>
            </div>
          ))}
        </div>
      </Shell>
    </section>
  );
}
