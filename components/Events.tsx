"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { events } from "./content";
import { Kicker, SectionTitle, Shell, externalLinkProps, isRealDestination } from "./primitives/Type";

const GAP = 24;

export default function Events() {
  const n = events.length;
  const slides = [...events, ...events, ...events];

  const [index, setIndex] = useState(n);
  const [animate, setAnimate] = useState(true);
  const [offset, setOffset] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const didDrag = useRef(false);

  useEffect(() => {
    function measure() {
      const card = cardRef.current;
      const container = containerRef.current;
      if (!card || !container) return;
      const step = card.offsetWidth + GAP;
      const center = container.offsetWidth / 2 - card.offsetWidth / 2;
      setOffset(center - index * step);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [index]);

  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    return () => cancelAnimationFrame(id);
  }, [animate]);

  function go(dir: 1 | -1) {
    setAnimate(true);
    setIndex((i) => i + dir);
  }

  function handleTransitionEnd() {
    if (index < n) {
      setAnimate(false);
      setIndex(index + n);
    } else if (index >= n * 2) {
      setAnimate(false);
      setIndex(index - n);
    }
  }

  function handlePointerDown(e: React.PointerEvent) {
    dragStartX.current = e.clientX;
    didDrag.current = false;
  }

  function handlePointerUp(e: React.PointerEvent) {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    dragStartX.current = null;
    // A swipe must not also register as a click on the card underneath.
    didDrag.current = Math.abs(delta) > 8;
    if (delta > 40) go(-1);
    else if (delta < -40) go(1);
  }

  function handleCardClick(e: React.MouseEvent) {
    if (didDrag.current) e.preventDefault();
  }

  if (!n) return null;

  return (
    <section id="eventos" className="border-b border-rule">
      <Shell className="pt-16 lg:pt-[104px]">
        <div className="mb-12 flex flex-col gap-6 text-center sm:flex-row sm:items-end sm:justify-between sm:gap-9 sm:text-left lg:mb-14">
          <div>
            <Kicker className="mb-[22px]">Eventos</Kicker>
            <SectionTitle>What&apos;s coming up</SectionTitle>
          </div>
          <div className="flex shrink-0 justify-center gap-3 sm:justify-end">
            <button
              onClick={() => go(-1)}
              aria-label="Previous event"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 font-display text-[20px] transition-colors hover:border-flagYellow hover:text-flagYellow"
            >
              ‹
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next event"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 font-display text-[20px] transition-colors hover:border-flagYellow hover:text-flagYellow"
            >
              ›
            </button>
          </div>
        </div>
      </Shell>

      <div
        ref={containerRef}
        className="touch-pan-y select-none overflow-hidden pb-[70px]"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`flex ${animate ? "transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]" : ""}`}
          style={{ transform: `translateX(${offset}px)`, gap: `${GAP}px` }}
        >
          {slides.map((e, i) => {
            const isActive = i === index;
            const linked = isRealDestination(e.href);
            // Only a card that actually goes somewhere becomes a link; otherwise
            // it would be a dead click that jumps the page to this same section.
            const Card = linked ? "a" : "div";
            return (
              <Card
                key={`${e.title}-${i}`}
                ref={isActive ? (cardRef as never) : undefined}
                {...(linked ? { href: e.href, onClick: handleCardClick, ...externalLinkProps(e.href!) } : {})}
                draggable={false}
                className={`group relative aspect-[3/4] w-[280px] shrink-0 overflow-hidden rounded-[6px] transition-opacity duration-500 sm:w-[360px] ${
                  isActive ? "opacity-100" : "opacity-35"
                }`}
              >
                <Image
                  src={e.img}
                  alt={e.title}
                  fill
                  draggable={false}
                  sizes="(min-width: 640px) 360px, 280px"
                  className="object-cover [filter:grayscale(0.35)_saturate(1.15)_contrast(1.05)] transition-transform duration-[420ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent" />

                <div className="absolute left-4 top-4">
                  <p className="font-display text-[46px] font-bold leading-[0.85]" style={{ color: e.accent }}>
                    {e.day}
                  </p>
                  <p className="mt-1 font-body text-[10px] font-medium uppercase tracking-[0.22em] text-cream/70">
                    {e.month}
                  </p>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span
                    className="mb-3 inline-block px-[9px] py-[5px] font-body text-[10px] font-medium uppercase tracking-[0.22em] text-ink"
                    style={{ background: e.accent }}
                  >
                    {e.kind}
                  </span>
                  <h3 className="mb-2 font-display text-[26px] font-bold uppercase leading-[0.95]">{e.title}</h3>
                  <p className="font-body text-[10px] font-medium uppercase tracking-[0.2em] text-cream/60">
                    {e.venue} · {e.time}
                  </p>
                  <p className="mt-2 font-body text-[10px] font-medium uppercase tracking-[0.2em] text-flagYellow">
                    {[e.cta, e.price].filter(Boolean).join(" · ")}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
