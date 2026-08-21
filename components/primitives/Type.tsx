import { ReactNode } from "react";

/**
 * Spread onto an <a>. Opens off-site URLs in a new tab, leaves in-page
 * anchors alone — so a link never opens a duplicate tab of this site.
 */
export function externalLinkProps(href: string) {
  return /^https?:\/\//i.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

/** True when an href actually navigates somewhere off this page. */
export function isRealDestination(href?: string) {
  return !!href && !href.startsWith("#");
}

/** Section kicker — 11px, 0.3em tracking, uppercase, yellow. */
export function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-body text-[11px] font-medium uppercase tracking-[0.3em] text-flagYellow ${className}`}>
      {children}
    </p>
  );
}

/** Small meta / micro label. Pass tone to dial the opacity. */
export function Label({
  children,
  className = "",
  size = 11,
}: {
  children: ReactNode;
  className?: string;
  size?: 10 | 11;
}) {
  return (
    <p
      className={`font-body font-medium uppercase ${
        size === 10 ? "text-[10px] tracking-[0.24em]" : "text-[11px] tracking-[0.2em]"
      } ${className}`}
    >
      {children}
    </p>
  );
}

/** Section heading — Antonio 700, fluid 40→92px, uppercase, tight. */
export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-[clamp(40px,8.5vw,92px)] font-bold uppercase leading-[0.88] ${className}`}>
      {children}
    </h2>
  );
}

/** Page shell — 1360px max, gutters scale 20 → 32 → 44px. */
export function Shell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-shell px-5 sm:px-8 lg:px-11 ${className}`}>{children}</div>;
}

/** Section header — title left, meta right; stacks under sm. */
export function SectionHead({
  kicker,
  title,
  meta,
  className = "",
}: {
  kicker: ReactNode;
  title: ReactNode;
  meta?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-6 text-center sm:flex-row sm:items-end sm:justify-between sm:gap-9 sm:text-left ${className}`}
    >
      <div>
        <Kicker className="mb-[22px]">{kicker}</Kicker>
        <SectionTitle>{title}</SectionTitle>
      </div>
      {meta ? (
        <p className="font-body text-[11px] font-medium uppercase leading-[2] tracking-[0.16em] text-cream/40 sm:text-right">
          {meta}
        </p>
      ) : null}
    </div>
  );
}

export function ButtonFilled({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-block rounded-[3px] bg-flagYellow px-7 py-[15px] font-display text-[17px] font-bold uppercase tracking-[0.07em] text-ink transition-colors duration-[260ms] hover:bg-cream sm:px-10 sm:py-[19px] sm:text-[21px]"
    >
      {children}
    </a>
  );
}

export function ButtonOutline({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-block rounded-[3px] border border-cream/35 px-7 py-[14px] font-display text-[17px] font-bold uppercase tracking-[0.07em] text-cream transition-colors duration-[260ms] hover:border-flagYellow hover:text-flagYellow sm:px-[38px] sm:py-[18px] sm:text-[21px]"
    >
      {children}
    </a>
  );
}
