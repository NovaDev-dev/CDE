"use client";
import { useState } from "react";

const links = [
  { label: "Event",        href: "#rhythms"      },
  { label: "Instructors",  href: "#instructors"  },
  { label: "Gallery",      href: "#gallery"      },
  { label: "Tickets",      href: "#tickets"      },
  { label: "Contact",      href: "#contact"      },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-night/90 backdrop-blur-md border-b border-cream/8">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" data-link="" className="font-condensed text-4xl leading-none text-cream tracking-wide">
          CDE
        </a>

        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-link=""
                className="font-mono text-[10px] tracking-[0.25em] text-cream/40 hover:text-cream uppercase transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#tickets"
          data-link=""
          className="hidden md:inline-block btn-accent text-night font-condensed text-xl px-6 py-1.5 tracking-wider"
        >
          Ticket
        </a>

        <button
          className="md:hidden text-cream"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-night border-t border-cream/8 px-6 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-mono text-[10px] tracking-[0.25em] text-cream/40 hover:text-cream uppercase border-b border-cream/8 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#tickets"
            className="block mt-4 btn-accent text-night font-condensed text-xl text-center px-5 py-2 tracking-wider"
          >
            Ticket
          </a>
        </div>
      )}
    </nav>
  );
}
